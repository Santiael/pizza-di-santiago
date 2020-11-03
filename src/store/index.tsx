import React, { createContext, useContext, useReducer } from 'react'
import reducer, { StoreState, StoreReducer } from './reducer'

interface Context {
  state: StoreState
  setSize(size: string): void
  setCrustType(crustType: string): void
  addTopping(topping: string): void
  removeTopping(topping: string): void
  resetStore(): void
}

// eslint-disable-next-line
// @ts-ignore
const context: React.Context<Context> = createContext()
const { Provider } = context

export const initialState = {
  price: 0,
  size: '',
  crustType: '',
  toppings: [],
  canAddTopping: true,
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<StoreReducer>(reducer, initialState)

  function setSize(size: string) {
    dispatch({ type: 'setSize', value: size })
  }
  function setCrustType(crustType: string) {
    dispatch({ type: 'setCrustType', value: crustType })
  }
  function addTopping(topping: string) {
    dispatch({ type: 'addTopping', value: topping })
  }
  function removeTopping(topping: string) {
    dispatch({ type: 'removeTopping', value: topping })
  }
  function resetStore() {
    dispatch({ type: 'reset', value: '' })
  }

  return (
    <Provider
      value={{
        state,
        setSize,
        setCrustType,
        addTopping,
        removeTopping,
        resetStore,
      }}
    >
      {children}
    </Provider>
  )
}

export const useStore = (): Context => useContext(context)
