import {all, fork} from "redux-saga/effects";
import {authSaga} from "./authSaga";
import {regSaga} from "./regSaga";
import {paymentSaga} from './paymentSaga';
import {orderSaga} from "./orderSaga";
import {addressSaga} from "./addressSaga";

export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(regSaga),
        fork(paymentSaga),
        fork(orderSaga),
        fork(addressSaga),
    ]);
}