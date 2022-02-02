import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { getRoute } from '../api';
import { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure } from '../modules/Order';

export function* getCordsSaga(action) {

    const {start, end } = action.payload;
    const cords = yield call(getRoute, start, end);

    if (cords) {
        yield put(fetchOrderSuccess(cords));
    } else {
        yield put(fetchOrderFailure());
    }
}

function* orderSagaWatch() {
    yield takeEvery(fetchOrderRequest, getCordsSaga);
}

export function* orderSaga () {
    yield fork(orderSagaWatch);
}