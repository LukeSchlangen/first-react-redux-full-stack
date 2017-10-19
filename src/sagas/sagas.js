// sagas.js

import {all} from 'redux-saga/effects';
import listApi from './listApi';

// generator function
export default function* rootSaga() {
    yield all([listApi()]);
}