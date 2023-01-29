import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import postsReducer from './reducers/posts/postsReducer'
import loginReducer from './reducers/login/loginReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  login: loginReducer,
  posts: postsReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
