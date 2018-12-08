import { delay } from 'redux-saga'
import { put, takeEvery,all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync(){
	yield delay(1000)
	yield put({type:'INCREMENT'})
}


function* watchIncrementAsync() {
	yield takeEvery('INCREMENT_ASYNC',incrementAsync)
}

export default function* rootSaga() {
	yield all([

		helloSaga(),

		watchIncrementAsync(),

		])
}