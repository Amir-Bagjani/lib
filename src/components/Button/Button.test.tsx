import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Button from './Button'

describe('Button test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<Button children='Testing' />)
  })

  it('should render children', () => {
    render(<Button children='Testing' />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <Button
        children='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        children='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        children='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})
