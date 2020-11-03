import React from 'react'

import { Container } from './styles'

interface IProps {
  value: number
}

const Price: React.FC<IProps> = ({ value }) => (
  <Container>
    <span>Price:</span>
    <span>{`$${value.toFixed(2)}`}</span>
  </Container>
)

export default Price
