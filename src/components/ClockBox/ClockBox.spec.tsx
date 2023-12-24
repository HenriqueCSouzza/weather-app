import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ClockBox from './ClockBox'

describe('ClockBox component', () => {
  it('renders the ClockBox with the Clock SVG', () => {
    const title = 'Test Title'
    const hourBegin = '08:00 AM'
    const hourEnd = '05:00 PM'
    const dt = new Date('2023-01-01T12:30:45') // Mock date for Clock component

    render(
      <ClockBox title={title} hourBegin={hourBegin} hourEnd={hourEnd} dt={dt} />
    )

    // Verifica se o texto do título está presente no DOM
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()

    // Verifica se os textos de hora estão presentes no DOM
    const hourBeginElement = screen.getByText(
      hourBegin.replace(/:\d{2}\s/, ' ')
    )
    expect(hourBeginElement).toBeInTheDocument()

    const hourEndElement = screen.getByText(hourEnd.replace(/:\d{2}\s/, ' '))
    expect(hourEndElement).toBeInTheDocument()
  })
})
