// ClimaticDisplay.test.tsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ClimaticDisplay from './ClimaticDisplay'

describe('ClimaticDisplay', () => {
  test('renders ClimaticDisplay with default values', () => {
    render(<ClimaticDisplay />)

    // Assert that the component renders with default values
    expect(screen.getByText('Wind')).toBeInTheDocument()
    expect(screen.getByText('Hum')).toBeInTheDocument()
    expect(screen.getByText('Rain')).toBeInTheDocument()
  })

  test('renders ClimaticDisplay with provided values', () => {
    render(<ClimaticDisplay wind={10} humidity={50} drizzle={20} />)

    // Assert that the component renders with provided values
    expect(screen.getByText('Wind')).toBeInTheDocument()
    expect(screen.getByText('10 km/h')).toBeInTheDocument()
    expect(screen.getByText('Hum')).toBeInTheDocument()
    expect(screen.getByText('50 %')).toBeInTheDocument()
    expect(screen.getByText('Rain')).toBeInTheDocument()
    expect(screen.getByText('20 %')).toBeInTheDocument()
  })
})
