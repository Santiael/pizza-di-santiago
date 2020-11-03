import React from 'react'

import { useNavigation } from 'navigation'
import Header from 'components/Header'
import SizeAndCrust from 'pages/SizeAndCrust'
import Toppings from 'pages/Toppings'
import Checkout from 'pages/Checkout'

import { Container } from './styles'

const App: React.FC = () => {
  const { context } = useNavigation()

  return (
    <Container>
      <Header />
      {context === 'size-n-crust' && <SizeAndCrust />}
      {context === 'toppings' && <Toppings />}
      {context === 'checkout' && <Checkout />}
    </Container>
  )
}

export default App
