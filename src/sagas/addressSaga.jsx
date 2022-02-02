import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { getAddressList } from '../api';
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from '../modules/ListAddresses';

export function* getAddressListSaga() {
    const data = yield call(getAddressList);

    if (data) {
        yield put(fetchAddressSuccess(data.addresses));
    } else {
        yield put(fetchAddressFailure(data.error));
    }
}

function* addressSagaWatch() {
    yield takeEvery(fetchAddressRequest, getAddressListSaga);
}

export function* addressSaga() {
    yield fork(addressSagaWatch);
}