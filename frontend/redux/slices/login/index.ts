import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { TloginData } from './constants'

interface initialStateInterface {
  isAuth: boolean
  name: string
  avatarSrc: string
  id: number | null
  email: string | null
}

const initialState: initialStateInterface = {
  isAuth: false,
  name: '',
  avatarSrc: '',
  id: null,
  email: null,
}

//клочкова максима прветствует  вас в процессе изучения ее кода :^)

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<TloginData>) => {
      // console.log(action.type)

      state.isAuth = true
      state.name = action.payload.username
      state.id = action.payload.id
      state.email = action.payload.email || null
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.login,
      }
    },
  },
})

export const selectLoginStatus = (store): boolean => store.login.isAuth
export const { setLoginData } = loginSlice.actions
export const loginReducer = loginSlice.reducer
