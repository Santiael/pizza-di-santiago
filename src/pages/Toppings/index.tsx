import React from 'react'

import { useStore } from 'store'
import { useNavigation } from 'navigation'
import Panel from 'components/Panel'
import Topping from 'components/Topping'
import Button from 'components/Button'
import Price from 'components/Price'

import { Container, Menu, Info, ButtonsWrapper } from './styles'
import toppings from './data'

const Toppings: React.FC = () => {
  const { goBack, goNext } = useNavigation()
  const { state, addTopping, removeTopping } = useStore()

  function setTopping(topping: string) {
    return (check: boolean) =>
      check ? addTopping(topping) : removeTopping(topping)
  }

  return (
    <Container>
      <Panel title="Toppings">
        <Menu>
          {toppings.map(({ name, image }) => {
            const selected = !!state.toppings.find((t) => t === name)

            return (
              <Topping
                image={image}
                key={name}
                label={name}
                onChange={setTopping(name)}
                selected={selected}
                disabled={!state.canAddTopping && !selected}
              />
            )
          })}
        </Menu>
      </Panel>
      <Info>
        The first 3 toppings are for free, after that you pay $0.50/each.
      </Info>
      <Price value={state.price} />
      <ButtonsWrapper>
        <Button isRed text="return" onClick={goBack} />
        <Button text="checkout" onClick={goNext} />
      </ButtonsWrapper>
    </Container>
  )
}

export default Toppings
