import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'
import '@testing-library/jest-dom'
 
describe('Layout', () => {
  it('renders a link', () => {
    render(<Layout />)
 
    const link = screen.getByRole('link', {
      name: /Visit SRJC/i,
    })
 
    expect(link).toBeInTheDocument()
  })
})
















