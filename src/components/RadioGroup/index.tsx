import React, { useState } from 'react'

import RadioButton from './RadioButton'

import { Container, OptionWrapper, Label, Value } from './radio-group.styles'

export type Option = {
  label: string
  description?: string
  price: number
}

interface IProps {
  options: Option[]
  selected?: string
  onChange?(label: string): void
}

const RadioGroup: React.FC<IProps> = ({ options, selected, onChange }) => {
  const [checked, setChecked] = useState<string>(selected || '')

  function onSelectOption(id: number) {
    onChange && onChange(options[id].label)
    setChecked(options[id].label)
  }

  return (
    <Container role="radiogroup">
      {options.map(({ label, description, price }, id) => (
        <OptionWrapper key={`radio-option-${label}`}>
          <div onClick={() => onSelectOption(id)}>
            <RadioButton
              labelledBy={`radio-option-${label}`}
              checked={checked === label}
            />
            <Label id={`radio-option-${label}`}>
              {label}
              {description && <div>{description}</div>}
            </Label>
          </div>
          <Value>{`$${price}`}</Value>
        </OptionWrapper>
      ))}
    </Container>
  )
}

export default RadioGroup
