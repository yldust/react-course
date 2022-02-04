import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
    sendData,
    setRequestSuccess,
    setRequestError,
    getRequest,
    getRequestSuccess,
    changeIsEdit,
    getRequestError,
} from './actions';

const blank = { cardNumber: '', expiryDate: '', nameCard: '', cvc: '' };

const card = handleActions(
    {
        [sendData]: () => blank,
        [setRequestSuccess]: (state, action) => action.payload,
        [setRequestError]: () => blank,
        [getRequest]: () => blank,
        [getRequestSuccess]: () => (state, action) => action.payload,
        [getRequestError]: () => blank,
    },
    blank
);

const isEdit = handleActions(
    {
        [setRequestSuccess]: () => false,
        [changeIsEdit]: (state, action) => action.payload
    },
    false
);

const errors = handleActions(
    {
        [setRequestSuccess]: () => null,
        [getRequestSuccess]: () => null,
        [setRequestError]: (state, action) => action.payload.error,
        [getRequestError]: (state, action) => action.payload.error,
    },
    null
);

export default combineReducers({ card, errors, isEdit });