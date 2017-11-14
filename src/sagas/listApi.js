// listApi.js

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// worker
function* fetchList() {
    try {
        const list = yield call(axios.get, 'http://demo1402877.mockable.io/list'); // this will be the starting list
        yield put({
            type: 'LIST_FETCH_SUCCEEDED',
            payload: list
        })
    } catch (error) {
        // Need to add action to handle error, skipped for now
        yield put({
            type: 'LIST_FETCH_FAILED',
            payload: error
        })
    }
}



// master/watcher
export default function* listApiSaga() {
    // need to add action if want to do something like loading bar (between requested and http response)
    yield takeEvery('LIST_REQUESTED', fetchList);

}