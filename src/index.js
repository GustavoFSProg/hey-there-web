import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from 'styles/global'
import Provider from 'core/store'
import * as serviceWorker from 'core/serviceWorker'
import App from 'core/App'
import theme from 'theme'

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
