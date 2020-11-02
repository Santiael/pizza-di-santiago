import React from 'react'

import { useNavigation } from 'navigation'
import Panel from 'components/Panel'
import RadioGroup, { Option } from 'components/RadioGroup'
import Price from 'components/Price'
import Button from 'components/Button'

import { Container } from './size-and-crust.styles'

const sizeOptions: Option[] = [
  { label: 'small', description: '(up to 5 toppings)', value: 8 },
  { label: 'medium', description: '(up to 7 toppings)', value: 10 },
  { label: 'large', description: '(up to 9 toppings)', value: 12 },
]

const crustOptions: Option[] = [
  { label: 'thin', value: 2 },
  { label: 'thick', value: 4 },
]

interface IProps {
  price: number
  setSizeValue(value: number): void
  setCrustValue(value: number): void
}

const SizeAndCrust: React.FC<IProps> = ({
  price,
  setSizeValue,
  setCrustValue,
}) => {
  const { goNext } = useNavigation()

  return (
    <Container>
      <Panel title="Size:">
        <RadioGroup
          options={sizeOptions}
          onChange={(value) => setSizeValue(value)}
        />
      </Panel>
      <Panel title="Crust Type:">
        <RadioGroup
          options={crustOptions}
          onChange={(value) => setCrustValue(value)}
        />
      </Panel>
      <div>
        <Price value={price} />
        <Button text="choose toppings" onClick={goNext} />
      </div>
    </Container>
  )
}

export default SizeAndCrust
