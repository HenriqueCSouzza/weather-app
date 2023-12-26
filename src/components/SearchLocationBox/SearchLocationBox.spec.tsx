import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchLocationBox from './SearchLocationBox'

describe('SearchLocationBox', () => {
  test('renders SearchLocationBox with default state', () => {
    render(<SearchLocationBox />)

    expect(screen.getByTestId('label-search')).toBeInTheDocument()
  })

  test('renders SearchLocationBox with provided city name', () => {
    render(<SearchLocationBox city="Test City" />)

    expect(screen.getByTestId('label-search')).toHaveTextContent('Test City')
  })
})

// Add more tests as needed
