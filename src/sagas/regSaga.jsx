import { REGISTER, logIn } from "../actions";
import { serverSignIn } from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* registerSaga(action) {
    const { email, password, name } = action.payload;
    const data = yield call(serverSignIn, email, password, name);
    if (data.success) {
        yield put(logIn(data.token));
    }
}

export function* regSaga() {
    yield takeEvery(REGISTER, registerSaga);
}