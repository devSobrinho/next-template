import { render, screen } from '@testing-library/react'
import Home from '../../pages'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Ola mundo/i,
    })

    expect(heading).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})