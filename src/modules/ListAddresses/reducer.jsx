import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from './actions';

const addressList = handleActions(
    {
        [fetchAddressRequest]: () => [],
        [fetchAddressSuccess]: (_state, action) => action.payload,
        [fetchAddressFailure]: () => [],
    },
    []
);

const errors = handleActions(
    {
        [fetchAddressRequest]: () => '',
        [fetchAddressFailure]: (_state, action) => action.payload,
    },
    ''
);

export default combineReducers({addressList, errors });