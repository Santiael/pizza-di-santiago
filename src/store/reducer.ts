import { calculatePrice } from './calculate-price'
import { canAddTopping } from './can-add-topping'

import { initialState } from '.'

export type StoreState = {
  price: number
  size: string
  crustType: string
  toppings: string[]
  canAddTopping: boolean
}

export type StoreAction = {
  type: 'setSize' | 'setCrustType' | 'addTopping' | 'removeTopping' | 'reset'
  value: string
}

export type StoreReducer = React.Reducer<StoreState, StoreAction>

const reducer: StoreReducer = (state, { type, value }) => {
  switch (type) {
    case 'setSize': {
      return Object.assign({}, state, {
        size: value,
        price: calculatePrice(value, state.crustType, state.toppings.length),
        toppings: [],
        canAddTopping: true,
      })
    }

    case 'setCrustType': {
      return Object.assign({}, state, {
        crustType: value,
        price: calculatePrice(state.size, value, state.toppings.length),
      })
    }

    case 'addTopping': {
      const newToppings = [...state.toppings, value]

      return Object.assign({}, state, {
        toppings: newToppings,
        price: calculatePrice(state.size, state.crustType, newToppings.length),
        canAddTopping: canAddTopping(state.size, newToppings.length),
      })
    }

    case 'removeTopping': {
      const newToppings = state.toppings.filter((topping) => topping !== value)

      return Object.assign({}, state, {
        toppings: newToppings,
        price: calculatePrice(state.size, state.crustType, newToppings.length),
        canAddTopping: canAddTopping(state.size, newToppings.length),
      })
    }

    case 'reset': {
      return initialState
    }

    default:
      return state
  }
}

export default reducer
