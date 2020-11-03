import React from 'react'

import { useNavigation } from 'navigation'
import Header from 'components/Header'
import SizeAndCrust from 'pages/SizeAndCrust'

import { Container } from './app.styles'

const App: React.FC = () => {
  const { context } = useNavigation()

  return (
    <Container>
      <Header />
      {context === 'size-n-crust' && <SizeAndCrust />}
    </Container>
  )
}

export default App
