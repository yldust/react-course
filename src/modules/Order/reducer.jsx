import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure, removeOrder } from './actions';

const cords = handleActions(
    {
        [fetchOrderRequest]: () => [],
        [fetchOrderSuccess]: (_state, action) => action.payload,
        [fetchOrderFailure]: () => [],
        [removeOrder]: () => [],
    },
    []
);

const isLoading = handleActions(
    {
        [fetchOrderRequest]: () => true,
        [fetchOrderSuccess]: () => false,
        [fetchOrderFailure]: () => false,
    },
    false
);

const errors = handleActions(
    {
        [fetchOrderRequest]: () => '',
        [fetchOrderFailure]: (_state, action) => action.payload,
    },
    ''
);

export default combineReducers({ cords, isLoading, errors });