import React from 'react'
import { render } from '@testing-library/react'

import colors from 'styles/colors'

import Button from '..'

describe('<Button />', () => {
  it('should render', () => {
    const result = render(<Button text="text" />)
    expect(result).toBeDefined()
  })

  it('should show text', () => {
    const text = 'lorem ipsum'
    const { getByText } = render(<Button text={text} />)
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should be green', () => {
    const text = 'lorem ipsum'
    const { getByText } = render(<Button text={text} />)

    expect(getByText(text)).toHaveStyle({
      backgroundColor: colors.green,
      borderColor: colors.greenDark,
      boxShadow: `0px 4px 0px ${colors.greenDark}`,
    })
  })

  it('should be red', () => {
    const text = 'lorem ipsum'
    const { getByText } = render(<Button isRed text={text} />)

    expect(getByText(text)).toHaveStyle({
      backgroundColor: colors.red,
      borderColor: colors.redDark,
      boxShadow: `0px 4px 0px ${colors.redDark}`,
    })
  })
})
