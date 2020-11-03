import pepperoni from 'assets/toppings/pepperoni.jpg'
import mushrooms from 'assets/toppings/mushrooms.jpg'
import onions from 'assets/toppings/onions.jpg'
import sausage from 'assets/toppings/sausage.jpg'
import bacon from 'assets/toppings/bacon.jpg'
import cheese from 'assets/toppings/cheese.jpg'
import blackOlives from 'assets/toppings/black-olives.jpg'
import greenPeppers from 'assets/toppings/green-peppers.jpg'
import pineapple from 'assets/toppings/pineapple.jpg'
import spinach from 'assets/toppings/spinach.jpg'

type Topping = {
  name: string
  image: string
}

const toppings: Topping[] = [
  {
    name: 'pepperoni',
    image: pepperoni,
  },
  {
    name: 'mushrooms',
    image: mushrooms,
  },
  {
    name: 'onions',
    image: onions,
  },
  {
    name: 'sausage',
    image: sausage,
  },
  {
    name: 'bacon',
    image: bacon,
  },
  {
    name: 'extra cheese',
    image: cheese,
  },
  {
    name: 'black olives',
    image: blackOlives,
  },
  {
    name: 'green peppers',
    image: greenPeppers,
  },
  {
    name: 'pineapple',
    image: pineapple,
  },
  {
    name: 'spinach',
    image: spinach,
  },
]

export default toppings
