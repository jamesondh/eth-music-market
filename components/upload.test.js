import Upload from './upload'
import { render, screen } from '@testing-library/react'

describe('Upload Component', () => {
  it('should have exactly 1 `form` section', () => {
    const { getByRole } = render(<Upload />)
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument() // error if not exactly 1 element found
  })
})