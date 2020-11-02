import React from 'react'
import { render } from '@testing-library/react'

import Header from '..'

describe('<Header />', () => {
  it('should render', () => {
    const result = render(<Header />)
    expect(result).toBeDefined()
  })
})
