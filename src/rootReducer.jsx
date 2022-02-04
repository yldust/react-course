import {combineReducers} from "redux";
import authReducer from './modules/Auth';
import paymentReducer from './modules/Payment';
import orderReducer from './modules/Order';
import addressReducer from './modules/ListAddresses';

export default combineReducers({
    auth: authReducer,
    payment: paymentReducer,
    order: orderReducer,
    addresses: addressReducer
});