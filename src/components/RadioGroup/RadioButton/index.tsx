import React from 'react'

import { Container } from './radio-button.styles'

interface IProps {
  labelledBy?: string
  checked?: boolean
}

const RadioButton: React.FC<IProps> = ({ checked, labelledBy }) => (
  <Container
    data-testid={checked ? 'radio-checked' : 'radio-not-checked'}
    role="radio"
    aria-checked={!!checked}
    aria-labelledby={labelledBy}
    checked={checked}
  />
)

export default RadioButton
