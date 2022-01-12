import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {userMiddleware} from "./middleware/userMiddleware";

export const store = createStore(rootReducer, applyMiddleware(userMiddleware));