import React from 'react'
import { NavigationProvider, useNavigation } from '..'

const App: React.FC = () => {
  const { context, goPrevious, goNext } = useNavigation()
  return (
    <>
      <div>{context}</div>
      <button onClick={goPrevious}>goPrevious</button>
      <button onClick={goNext}>goNext</button>
    </>
  )
}

export const NavigableScreen: React.FC = () => (
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
