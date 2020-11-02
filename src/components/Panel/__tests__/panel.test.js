import React from 'react'
import { render } from '@testing-library/react'

import Panel from '..'

describe('<Panel />', () => {
  it('should render', () => {
    const result = render(<Panel />)
    expect(result).toBeDefined()
  })

  it('should show title', () => {
    const title = 'lorem ipsum'
    const { getByText } = render(<Panel title={title} />)
    expect(getByText(title)).toBeInTheDocument()
  })

  it('should render child', () => {
    const Child = () => <span data-testid="child">child</span>

    const { getByTestId } = render(
      <Panel title="lorem ipsum">
        <Child />
      </Panel>,
    )
    expect(getByTestId('child')).toBeInTheDocument()
  })
})
