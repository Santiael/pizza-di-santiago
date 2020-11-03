import React from 'react'

import { Container } from './styles'

interface IProps {
  title: string
  children?: React.ReactNode
}

const Panel: React.FC<IProps> = ({ title, children }) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Panel
