import React, { useState, useEffect } from 'react'

import { Container, Checkbox, ImageFrame } from './topping.styles'

interface IProps {
  label: string
  image: string
  disabled?: boolean
  onChange?(cheked: boolean): void
}

const Topping: React.FC<IProps> = ({ label, image, disabled, onChange }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    onChange && onChange(checked)
  }, [onChange, checked])

  return (
    <Container
      disabled={disabled}
      onClick={() => !disabled && setChecked((checked) => !checked)}
    >
      <Checkbox
        data-testid={checked ? 'topping-checked' : 'topping-not-checked'}
        id={`topping-${label}`}
        role="checkbox"
        aria-checked={!!checked}
        aria-disabled={!!disabled}
        checked={checked}
      />
      <ImageFrame>
        <img src={image} alt={label} />
      </ImageFrame>
      <label htmlFor={`topping-${label}`}>{label}</label>
    </Container>
  )
}

export default Topping
