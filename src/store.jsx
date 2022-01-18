import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
//import {userMiddleware} from "./middleware/userMiddleware";
import  createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);