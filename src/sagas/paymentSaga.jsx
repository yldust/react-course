import {
    sendData,
    setRequestSuccess,
    setRequestError,
    getCardId,
    getRequestError
} from '../modules/Payment';

import { getToken } from '../modules/Auth'
import { setCard, getCard } from "../api";
import { takeEvery, call, fork, select, put } from "redux-saga/effects";

function* sendCardSaga(action) {
    try {
        const token = yield select(getToken);
        const data = yield call(setCard, { ...action.payload, token });

        if (data.success) {
            yield put(setRequestSuccess(action.payload));
        }
        if (!data.success) {
            yield put(setRequestError("Данные не сохранены!"));
        }
    } catch (error) {
        yield put(setRequestError("Ошибка отправки данных!"));
    }
}

export function* sendCardSagaWatch() {
    yield takeEvery(sendData, sendCardSaga);
}

function* getCardDataSaga() {
    try {
        const token = yield select(getToken);
        const data = yield call(getCard, { token });

        if (!data.id) {
            yield put(getCardId(data.id));
        } else {
            return put(getRequestError("Не удалось получить данные!"));
        }
    } catch (error) {
        return  put(getRequestError("Ошибка передачи данных"));
    }
}

function* getCardDataSagaWatch() {
    yield takeEvery(getCardId, getCardDataSaga);
}

export function* paymentSaga () {
    yield fork(sendCardSagaWatch);
   // yield fork(getCardDataSagaWatch);
}