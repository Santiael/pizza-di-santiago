import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import toppingImages from 'assets/toppings'
import Topping from '..'

describe('<Topping />', () => {
  const topping = 'pepperoni'

  it('should show topping label', () => {
    const { getByText } = render(
      <Topping label={topping} image={toppingImages.pepperoni} />,
    )

    expect(getByText(topping)).toBeInTheDocument()
  })

  it('should init unchecked', () => {
    const { getByTestId } = render(
      <Topping label={topping} image={toppingImages.pepperoni} />,
    )

    expect(getByTestId('topping-not-checked')).toBeInTheDocument()
  })

  it('should be checkable', async () => {
    const { getByText, getByTestId } = render(
      <Topping label={topping} image={toppingImages.pepperoni} />,
    )

    fireEvent.click(getByText(topping))

    await waitFor(() => {
      expect(getByTestId('topping-checked')).toBeInTheDocument()
    })

    fireEvent.click(getByText(topping))

    await waitFor(() => {
      expect(getByTestId('topping-not-checked')).toBeInTheDocument()
    })
  })

  it('should not be checkable when disabled', async () => {
    const { getByText, getByTestId } = render(
      <Topping disabled label={topping} image={toppingImages.pepperoni} />,
    )

    expect(getByTestId('topping-not-checked')).toBeInTheDocument()

    fireEvent.click(getByText(topping))

    await waitFor(() => {
      expect(getByTestId('topping-not-checked')).toBeInTheDocument()
    })
  })
})
