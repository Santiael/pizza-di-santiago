import React from 'react'
import { render } from '@testing-library/react'

import Price from '..'

describe('<Price />', () => {
  it('should render price correctly', () => {
    const { getByText } = render(<Price value={10.5} />)

    expect(getByText('Price:')).toBeInTheDocument()
    expect(getByText('$10.50')).toBeInTheDocument()
  })
})
