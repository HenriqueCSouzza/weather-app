import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Clock from './Clock'

describe('Clock component', () => {
  test('renders the clock SVG', () => {
    const { container } = render(<Clock />)

    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })
})
