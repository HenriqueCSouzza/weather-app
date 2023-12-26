// ClimaticDisplay.test.tsx
import { render, screen } from '@testing-library/react'
import { format } from 'date-fns'
import '@testing-library/jest-dom'
import DateNowDisplay from './DateNowDisplay'

describe('DateNowDisplay', () => {
  test('renders DateNowDisplay with current date', () => {
    render(<DateNowDisplay />)

    const currentDate = new Date()
    const formattedDate = format(currentDate, "do MMM ''yy")

    const formattedTime = format(currentDate, 'EEEE h:mm a')

    expect(screen.getByText(formattedDate)).toBeInTheDocument()
    expect(screen.getByText(formattedTime)).toBeInTheDocument()
  })
})
