import React from 'react'

import { useStore } from 'store'
import { useNavigation } from 'navigation'
import Panel from 'components/Panel'
import Price from 'components/Price'
import Button from 'components/Button'

import {
  Container,
  Field,
  List,
  PriceWrapper,
  ButtonsWrapper,
} from './checkout.styles'

const SizeAndCrust: React.FC = () => {
  const { state, resetStore } = useStore()
  const { goBack, resetNavigation } = useNavigation()

  function reset() {
    alert('Thank you, and have a nice day!')
    resetStore()
    resetNavigation()
  }

  return (
    <Container>
      <Panel title="Check Order">
        <Field>Pizza Size: {state.size}</Field>
        <Field>Crust Type: {state.crustType}</Field>
        {state.toppings.length ? (
          <>
            <Field>Toppings:</Field>
            <List>
              {state.toppings.map((topping) => (
                <li key={topping}>{topping}</li>
              ))}
            </List>
          </>
        ) : (
          <Field>No Toppings</Field>
        )}
      </Panel>

      <PriceWrapper>
        <Price value={state.price} />
      </PriceWrapper>

      <ButtonsWrapper>
        <Button isRed text="return" onClick={goBack} />
        <Button text="confirm" onClick={reset} />
      </ButtonsWrapper>
    </Container>
  )
}

export default SizeAndCrust
