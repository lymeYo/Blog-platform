import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import App, { AppProps } from 'next/app'

import { parseCookies } from 'nookies'

import { wrapper } from '../redux/store'
import { MyApi } from '../utils/api'

import { setLoginData } from '../redux/slices/login'

import Header from '../components/header/Header'
import { TauthResData } from '../utils/api/types'
import '../styles/globals.scss'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    // @ts-ignore
    header: {
      main: '#f9a825',
      contrastText: '#fff',
    }, //  добавил палитру header в типы ThemeOptions.palette чтобы не ругался ts
  },
})

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...props.pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext) => {
    const { Component, ctx } = appContext
    try {
      const userData: TauthResData = await MyApi(
        appContext.ctx
      ).user.getProfile()
      store.dispatch(setLoginData(userData))
    } catch (err) {
      if (ctx.asPath == '/writePost') {
        ctx.res?.writeHead(301, {
          Location: '/404',
        })
        ctx.res?.end()
      } //перенаправляю на 404, если неавторизованный пользователь находится на странице для авторизованных

      // console.log(err, ' error')
    } finally {
      return {
        pageProps: { ...(await App.getInitialProps(appContext)).pageProps },
      }
    }
  }
)

export default MyApp
//The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
