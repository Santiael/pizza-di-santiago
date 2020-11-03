import React from 'react'
import { Container } from './styles'

interface IProps {
  text: string
  isRed?: boolean
  disabled?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Button: React.FC<IProps> = ({ text, isRed, disabled, onClick }) => (
  <Container isRed={isRed} disabled={disabled} onClick={onClick}>
    {text}
  </Container>
)

export default Button
