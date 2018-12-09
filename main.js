import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider}  from 'react-redux'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

  ReactDOM.render(
  	<Provider store={store}>
    <Counter/>
    </Provider>
      ,
    document.getElementById('root')
  )

