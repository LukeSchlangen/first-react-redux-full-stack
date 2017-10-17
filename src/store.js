import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/reducers';

// creating the logger, sagas will go here eventually
const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

// could also be a function that returns store, then the function would be called in App.js



export default store;