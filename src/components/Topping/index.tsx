import React, { useState } from 'react'

import { Container, Checkbox, ImageFrame } from './styles'

interface IProps {
  label: string
  image: string
  selected?: boolean
  disabled?: boolean
  onChange?(cheked: boolean): void
}

const Topping: React.FC<IProps> = ({
  label,
  image,
  selected,
  disabled,
  onChange,
}) => {
  const [checked, setChecked] = useState(!!selected)

  function onClick() {
    if (disabled) return
    onChange && onChange(!checked)
    setChecked(!checked)
  }

  return (
    <Container disabled={disabled} onClick={onClick}>
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
