import { Screens } from '.'

type NavigationAction = 'goPrevious' | 'goNext'
export type NavigationReducer = React.Reducer<Screens, NavigationAction>

type Constraints = {
  [key in Screens]: {
    previous?: Screens
    next?: Screens
  }
}

const constraints: Constraints = {
  'size-n-crust': {
    next: 'toppings',
  },
  toppings: {
    previous: 'size-n-crust',
    next: 'check',
  },
  check: {
    previous: 'toppings',
  },
}

const reducer: NavigationReducer = (context, action) => {
  const { previous, next } = constraints[context]

  switch (action) {
    case 'goPrevious':
      return previous || context
    case 'goNext':
      return next || context
    default:
      return context
  }
}

export default reducer
