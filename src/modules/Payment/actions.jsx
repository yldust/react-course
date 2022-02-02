import { createAction } from 'redux-actions';

const sendData = createAction('PAYMENT/SEND_DATA');
const setRequestSuccess = createAction('PAYMENT/SET_REQUEST_SUCCESS');
const setRequestError = createAction('PAYMENT/SET_REQUEST_ERROR');
const getCardId = createAction('PAYMENT/GET_CARD_ID');
const getRequestError = createAction('PAYMENT/GET_REQUEST_ERROR');
const changeIsEdit = createAction('PAYMENT/CHANGE_IS_EDIT');
const formError = createAction('PAYMENT/FORM_ERROR');

export {
    sendData,
    setRequestSuccess,
    setRequestError,
    getCardId,
    getRequestError,
    changeIsEdit,
    formError
};