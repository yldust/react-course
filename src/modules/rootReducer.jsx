import {combineReducers} from "redux";
import authReducer from './Auth';
import paymentReducer from './Payment';
import orderReducer from './Order';
import addressReducer from './ListAddresses';

export default combineReducers({
    auth: authReducer,
    payment: paymentReducer,
    order: orderReducer,
    addresses: addressReducer
});