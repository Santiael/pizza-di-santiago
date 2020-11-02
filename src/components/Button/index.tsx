import React from 'react'
import { Container } from './button.styles'

interface IProps {
  text: string
  isRed?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Button: React.FC<IProps> = ({ text, isRed, onClick }) => (
  <Container isRed={isRed} onClick={onClick}>
    {text}
  </Container>
)

export default Button
