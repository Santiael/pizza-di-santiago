import React from 'react'
import ReactDOM from 'react-dom'

import { Global } from '@emotion/core'
import globalStyles from 'styles/global'

import { StoreProvider } from 'store'
import { NavigationProvider } from 'navigation'

import App from 'App'

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <StoreProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
