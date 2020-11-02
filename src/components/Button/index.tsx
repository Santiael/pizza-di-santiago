import React from 'react'
import { Container } from './button.styles'

interface IProps {
  text: string
  isRed?: boolean
}

const Button: React.FC<IProps> = ({ text, isRed }) => (
  <Container isRed={isRed}>{text}</Container>
)

export default Button
