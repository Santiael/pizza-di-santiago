import React from 'react'
import { render } from '@testing-library/react'

import RadioGroup, { Option } from '..'

const options: Option[] = [
  { label: 'option 1', description: '(this description)', value: 10 },
  { label: 'option 2', value: 20 },
  { label: 'option 3', value: 30 },
]

describe('<RadioGroup />', () => {
  it('should render options correctly', () => {
    const { getByText } = render(<RadioGroup options={options} />)

    expect(getByText('option 1')).toBeInTheDocument()
    expect(getByText('(this description)')).toBeInTheDocument()
    expect(getByText('$10')).toBeInTheDocument()
    expect(getByText('option 2')).toBeInTheDocument()
    expect(getByText('$20')).toBeInTheDocument()
    expect(getByText('option 3')).toBeInTheDocument()
    expect(getByText('$30')).toBeInTheDocument()
  })

  it('should have just one checked', () => {
    const { getAllByTestId } = render(<RadioGroup options={options} />)

    expect(getAllByTestId('radio-checked')).toHaveLength(1)
    expect(getAllByTestId('radio-not-checked')).toHaveLength(2)
  })
})
