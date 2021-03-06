import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { NavigableScreen } from './dummy'

describe('size-n-crust context navigation', () => {
  beforeEach(() => {
    render(<NavigableScreen />)
  })

  it('should not navigate back', async () => {
    expect(screen.getByText('size-n-crust')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goBack'))

    await waitFor(() => {
      expect(screen.getByText('size-n-crust')).toBeInTheDocument()
    })
  })

  it('should navigate to toppings', async () => {
    expect(screen.getByText('size-n-crust')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goNext'))

    await waitFor(() => {
      expect(screen.getByText('toppings')).toBeInTheDocument()
    })
  })
})

describe('toppings context navigation', () => {
  beforeEach(async () => {
    render(<NavigableScreen />)
    fireEvent.click(screen.getByText('goNext'))
  })

  it('should navigate size-n-crust', async () => {
    expect(screen.getByText('toppings')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goBack'))

    await waitFor(() => {
      expect(screen.getByText('size-n-crust')).toBeInTheDocument()
    })
  })

  it('should navigate checkout', async () => {
    expect(screen.getByText('toppings')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goNext'))

    await waitFor(() => {
      expect(screen.getByText('checkout')).toBeInTheDocument()
    })
  })
})

describe('checkout context navigation', () => {
  beforeEach(async () => {
    render(<NavigableScreen />)
    fireEvent.click(screen.getByText('goNext'))
    fireEvent.click(screen.getByText('goNext'))
  })

  it('should navigate toppings', async () => {
    expect(screen.getByText('checkout')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goBack'))

    await waitFor(() => {
      expect(screen.getByText('toppings')).toBeInTheDocument()
    })
  })

  it('should navigate checkout', async () => {
    expect(screen.getByText('checkout')).toBeInTheDocument()

    fireEvent.click(screen.getByText('goNext'))

    await waitFor(() => {
      expect(screen.getByText('checkout')).toBeInTheDocument()
    })
  })
})
