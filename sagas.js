import { delay } from 'redux-saga'
import { put, takeEvery,all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync(){
	yield delay(1000)
	yield put({type:'INCREMENT'})
}

function* decrementAsync(){
	yield delay(1000)
	yield put({type:'DECREMENT'})
}

function* watchIncrementOrDecrementAsync() {
	yield takeEvery('INCREMENT_ASYNC',incrementAsync)
	yield takeEvery('DECREMENT_ASYNC',decrementAsync)
}

export default function* rootSaga() {
	yield all([

		helloSaga(),

		watchIncrementOrDecrementAsync(),

		])
}