import React from 'react'

import Header from 'components/Header'
import Panel from 'components/Panel'

import { Container } from './app.styles'

const App: React.FC = () => (
  <Container>
    <Header />
    <Panel title="Panel" />
  </Container>
)

export default App
