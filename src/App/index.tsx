import React, { useEffect, useState } from 'react'

import { useNavigation } from 'navigation'
import Header from 'components/Header'
import SizeAndCrust from 'pages/SizeAndCrust'

import { Container } from './app.styles'

const App: React.FC = () => {
  const { context } = useNavigation()

  const [sizeValue, setSizeValue] = useState(0)
  const [crustValue, setCrustValue] = useState(0)

  const [price, setPrice] = useState(0)

  useEffect(() => {
    const total = sizeValue + crustValue
    setPrice(total)
  }, [setPrice, sizeValue, crustValue])

  return (
    <Container>
      <Header />
      {context === 'size-n-crust' && (
        <SizeAndCrust
          price={price}
          setSizeValue={setSizeValue}
          setCrustValue={setCrustValue}
        />
      )}
    </Container>
  )
}

export default App
