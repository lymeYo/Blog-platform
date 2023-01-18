// @ts-nocheck 
//!nocheck

import "../styles/globals.scss"
import Header from "../components/header/Header"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import store from "../redux/store"
import React from "react"
import { AppProps } from "next/app"

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    header: {
      main: "#f9a825",
      contrastText: "#fff",
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
