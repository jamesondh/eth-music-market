import Header from '.'
import { render, screen } from '@testing-library/react'

// UI elements
import Tabs from 'react-bootstrap/Tabs'

describe('Dashboard Page Component', () => {
  it('should have exactly 1 `header` section', () => {
    const { getByRole } = render(<Header />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument() // error if not exactly 1 element found
  })
})