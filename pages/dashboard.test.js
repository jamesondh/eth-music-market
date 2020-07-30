import Dashboard from './dashboard'
import { render } from '@testing-library/react'

// UI elements
import Tabs from 'react-bootstrap/Tabs'

describe('Dashboard Page Component', () => {
  it('should have exactly 1 `main` section', () => {
    const { getByRole } = render(<Dashboard />)
    const main = getByRole('main')

    expect(main).toBeInTheDocument() // error if not exactly 1 element found
  })
  
  it('should load Bootstrap React components', () => {
    
  })
  
  it('should have three tabs', () => {
    
  })
  
})