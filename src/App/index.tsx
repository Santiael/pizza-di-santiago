import React from 'react'

import Header from 'components/Header'
import Panel from 'components/Panel'
import Button from 'components/Button'
import RadioGroup, { Option } from 'components/RadioGroup'
import Topping from 'components/Topping'
import toppingImages from 'assets/toppings'

import { Container } from './app.styles'

const options: Option[] = [
  { label: 'option 1', description: '(this description)', value: 10 },
  { label: 'option 2', value: 20 },
]

const App: React.FC = () => (
  <Container>
    <Header />
    <Panel title="Panel">
      <RadioGroup options={options} />
      <Topping label="pepperoni" image={toppingImages.pepperoni} />
      <Topping disabled label="bacon" image={toppingImages.bacon} />
    </Panel>
    <Button text="button" />
    <Button isRed text="red button" />
  </Container>
)

export default App
