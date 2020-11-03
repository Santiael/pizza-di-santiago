import React from 'react'

import { useStore } from 'store'
import { useNavigation } from 'navigation'
import Panel from 'components/Panel'
import RadioGroup, { Option } from 'components/RadioGroup'
import Price from 'components/Price'
import Button from 'components/Button'

import { Container, PriceWrapper, ButtonWrapper } from './styles'

const sizeOptions: Option[] = [
  { label: 'small', description: '(up to 5 toppings)', price: 8 },
  { label: 'medium', description: '(up to 7 toppings)', price: 10 },
  { label: 'large', description: '(up to 9 toppings)', price: 12 },
]

const crustOptions: Option[] = [
  { label: 'thin', price: 2 },
  { label: 'thick', price: 4 },
]

const SizeAndCrust: React.FC = () => {
  const { state, setSize, setCrustType } = useStore()
  const { goNext } = useNavigation()

  return (
    <Container>
      <Panel title="Size">
        <RadioGroup
          selected={state.size}
          options={sizeOptions}
          onChange={(value) => setSize(value)}
        />
      </Panel>
      <Panel title="Crust Type">
        <RadioGroup
          selected={state.crustType}
          options={crustOptions}
          onChange={(value) => setCrustType(value)}
        />
      </Panel>
      <PriceWrapper>
        <Price value={state.price} />
      </PriceWrapper>
      <ButtonWrapper>
        <Button
          text="choose toppings"
          onClick={goNext}
          disabled={!state.size || !state.crustType}
        />
      </ButtonWrapper>
    </Container>
  )
}

export default SizeAndCrust
