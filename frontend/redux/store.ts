import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import postsReducer from "./reducers/posts/postsReducer"
import { loginReducer } from './slices/login'
// import loginReducer from "./reducers/login/loginReducer"

export function makeStore() {
  return configureStore({
    reducer: {
      login: loginReducer,
      // posts: postsReducer
    }
  })
}

export const store = makeStore()
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export type AppStore = ReturnType<typeof makeStore> //создаю тип AppStore состоящий из возвращаемого значения функции makeStore
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

// export const wrapper = createWrapper<AppStore>(makeStore, { debug: process.env.NODE_ENV == 'development' })
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false })
// You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore().