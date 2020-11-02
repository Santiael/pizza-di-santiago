import React from 'react'
import ReactDOM from 'react-dom'

import { Global } from '@emotion/core'
import globalStyles from 'styles/global'

import { NavigationProvider } from 'navigation'

import App from 'App'

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
