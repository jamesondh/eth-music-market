import Home from './index'
import { render } from '@testing-library/react'

describe('Home Page Component', () => {
  it('should have exactly 1 `main` section', () => {
    const { getByRole } = render(<Home />)
    const main = getByRole('main')

    expect(main).toBeInTheDocument() // error if not exactly 1 element found
  })
  it('should load Bootstrap React components', () => {
    const { getAllByRole } = render(<Home />)
    const buttons = getAllByRole('button')
    
    expect(buttons[0]).toBeInTheDocument() // error if less than 1 elements found
  })
})