import { Screens, initialState } from '.'

type NavigationAction = 'goBack' | 'goNext' | 'reset'
export type NavigationReducer = React.Reducer<Screens, NavigationAction>

type Constraints = {
  [key in Screens]: {
    back?: Screens
    next?: Screens
  }
}

const constraints: Constraints = {
  'size-n-crust': {
    next: 'toppings',
  },
  toppings: {
    back: 'size-n-crust',
    next: 'checkout',
  },
  checkout: {
    back: 'toppings',
  },
}

const reducer: NavigationReducer = (context, action) => {
  const { back, next } = constraints[context]

  switch (action) {
    case 'goBack':
      return back || context
    case 'goNext':
      return next || context
    case 'reset':
      return initialState
    default:
      return context
  }
}

export default reducer
