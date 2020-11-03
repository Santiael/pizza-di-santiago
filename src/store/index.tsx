import React, { createContext, useContext, useReducer } from 'react'
import reducer, { StoreState, StoreReducer } from './reducer'

interface Context {
  state: StoreState
  setSize(size: string): void
  setCrustType(crustType: string): void
  addTopping(topping: string): void
  removeTopping(topping: string): void
}

// eslint-disable-next-line
// @ts-ignore
const context: React.Context<Context> = createContext()
const { Provider } = context

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<StoreReducer>(reducer, {
    price: 0,
    size: '',
    crustType: '',
    toppings: [],
    canAddTopping: true,
  })

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

  return (
    <Provider
      value={{ state, setSize, setCrustType, addTopping, removeTopping }}
    >
      {children}
    </Provider>
  )
}

export const useStore = (): Context => useContext(context)
