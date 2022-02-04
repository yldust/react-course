import {AUTHENTICATE, logIn} from "../modules/Auth";
import {serverLogIn} from "../api";
import {LocalStorageService, StorageKeys} from '../helpers/localStage';
import { takeEvery, call, put } from "redux-saga/effects";

const localStorageService = new LocalStorageService();

export function* authenticateSaga(action) {
    const { email, password } = action.payload;
    const data = yield call(serverLogIn, email, password);

    if (data.success && data.token) {
        localStorageService.save(StorageKeys.LOGIN_DATA, {
            email: action.payload.email,
            password: action.payload.password,
            token: data.token
        });
        yield put(logIn(data.token));
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}