import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from '@mui/material/styles'
import { UALProvider, withUAL } from 'ual-reactjs-renderer'
import { ApolloProvider } from '@apollo/react-hooks'
import CssBaseline from '@mui/material/CssBaseline'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { StylesProvider, createGenerateClassName } from '@mui/styles'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { ualConfig } from './config'
import App from './App'
import theme from './theme'
import { client } from './graphql'
import * as serviceWorker from './serviceWorker'
import { SharedStateProvider } from './context/state.context'
import './i18n'

const generateClassName = createGenerateClassName({
  productionPrefix: 'soE'
})

const SharedStateProviderWithUAL = withUAL(SharedStateProvider)

render(
  <UALProvider
    chains={[ualConfig.network]}
    authenticators={ualConfig.authenticators}
    appName={ualConfig.appName}
  >
    <SharedStateProviderWithUAL>
      <ApolloProvider client={client}>
        <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <App />
            </LocalizationProvider>
          </ThemeProvider>
        </StylesProvider>
      </ApolloProvider>
    </SharedStateProviderWithUAL>
  </UALProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
