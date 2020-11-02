import React from 'react'
import { render } from '@testing-library/react'

import RadioButton from '..'

describe('<RadioButton />', () => {
  it('should be checked', () => {
    const { getByTestId } = render(<RadioButton checked />)

    expect(getByTestId('radio-checked')).toBeInTheDocument()
  })

  it('should not be checked', () => {
    const { getByTestId } = render(<RadioButton />)

    expect(getByTestId('radio-not-checked')).toBeInTheDocument()
  })
})
