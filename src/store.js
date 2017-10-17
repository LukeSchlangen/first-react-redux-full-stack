import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

// creating the logger, sagas will go here eventually
const middleware = applyMiddleware(logger, sagaMiddleware);
const store = createStore(reducer, middleware);

// could also be a function that returns store, then the function would be called in App.js

sagaMiddleware.run(rootSaga);


export default store;