import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
    sendData,
    setRequestSuccess,
    setRequestError,
    getCardId,
    changeIsEdit,
    getRequestError,
    formError
} from './actions';

const blank = { cardNumber: '', expiryDate: '', nameOwnerCard: '', cvc: '' };

const card = handleActions(
    {
        [sendData]: () => blank,
        [setRequestSuccess]: (_state, action) => action.payload,
        [setRequestError]: () => blank,
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

const cardId = handleActions(
    {
        [getCardId]: (state, action) => action.payload,
        [getRequestError]: () => null,
        [formError]: () => null,
    },
    null
);

const errors = handleActions(
    {
        [setRequestSuccess]: () => null,
        [setRequestError]: (state, action) => action.payload.error,
    },
    null
);

export default combineReducers({ card, cardId, errors, isEdit });