import React, { createContext, useContext, useReducer } from 'react'
import reducer, { NavigationReducer } from './reducer'

export type Screens = 'size-n-crust' | 'toppings' | 'check'

export interface Context {
  context: Screens
  goPrevious(): void
  goNext(): void
}

// eslint-disable-next-line
// @ts-ignore
const context: React.Context<Context> = createContext()
const { Provider } = context

export const NavigationProvider: React.FC = ({ children }) => {
  const [context, dispatch] = useReducer<NavigationReducer>(
    reducer,
    'size-n-crust',
  )

  function goPrevious() {
    dispatch('goPrevious')
  }
  function goNext() {
    dispatch('goNext')
  }

  return (
    <Provider
      value={{
        context,
        goPrevious,
        goNext,
      }}
    >
      {children}
    </Provider>
  )
}

export const useNavigation = (): Context => useContext(context)
