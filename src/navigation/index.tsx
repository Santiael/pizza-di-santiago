import React, { createContext, useContext, useReducer } from 'react'
import reducer, { NavigationReducer } from './reducer'

export type Screens = 'size-n-crust' | 'toppings' | 'checkout'

export interface Context {
  context: Screens
  goBack(): void
  goNext(): void
  resetNavigation(): void
}

const context: React.Context<Context> = createContext({} as Context)
const { Provider } = context

export const initialState = 'size-n-crust'

export const NavigationProvider: React.FC = ({ children }) => {
  const [context, dispatch] = useReducer<NavigationReducer>(
    reducer,
    initialState,
  )

  function goBack() {
    dispatch('goBack')
  }
  function goNext() {
    dispatch('goNext')
  }
  function resetNavigation() {
    dispatch('reset')
  }

  return (
    <Provider
      value={{
        context,
        goBack,
        goNext,
        resetNavigation,
      }}
    >
      {children}
    </Provider>
  )
}

export const useNavigation = (): Context => useContext(context)
