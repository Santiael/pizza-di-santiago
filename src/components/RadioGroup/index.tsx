import React, { useState, useEffect } from 'react'

import RadioButton from './RadioButton'

import { Container, OptionWrapper, Label, Value } from './radio-group.styles'

export type Option = {
  label: string
  description?: string
  value: number
}

interface IProps {
  options: Option[]
  onChange?(value: number): void
}

const RadioGroup: React.FC<IProps> = ({ options, onChange }) => {
  const [selected, setSeleted] = useState(0)

  useEffect(() => {
    onChange && onChange(options[selected].value)
  }, [onChange, options, selected])

  return (
    <Container role="radiogroup">
      {options.map(({ label, description, value }, id) => (
        <OptionWrapper key={`${label}-${id}`}>
          <div onClick={() => setSeleted(id)}>
            <RadioButton
              labelledBy={`${label}-${id}`}
              checked={selected === id}
            />
            <Label id={`${label}-${id}`}>
              {label}
              {description && <div>{description}</div>}
            </Label>
          </div>
          <Value>{`$${value}`}</Value>
        </OptionWrapper>
      ))}
    </Container>
  )
}

export default RadioGroup
