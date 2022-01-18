import {all, fork} from "redux-saga/effects";
import {authSaga} from "./authSaga";
import {regSaga} from "./regSaga";

export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(regSaga)
    ]);
}