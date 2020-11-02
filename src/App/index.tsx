import React from 'react'

import Header from 'components/Header'
import Panel from 'components/Panel'
import Button from 'components/Button'

import { Container } from './app.styles'

const App: React.FC = () => (
  <Container>
    <Header />
    <Panel title="Panel" />
    <Button text="button" />
    <Button isRed text="red button" />
  </Container>
)

export default App
