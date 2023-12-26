import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ForecastWeather from './ForecastWeather'
import { TemperatureAverages } from '../../utils/calculateTemperatureAverages'

// Mock TemperatureAverages data for testing
const mockItems: TemperatureAverages[] = [
  {
    dayOfWeek: 'Mon',
    date: '2023-12-26',
    averages: [299.23],
    icons: ['10d']
  },
  {
    dayOfWeek: 'Tue',
    date: '2023-12-27',
    averages: [295.89, 292.83, 292.27, 291.91, 291.69, 294.05, 296.31, 295.35],
    icons: ['10d', '10n', '04n', '10n', '04d', '04d', '04d', '04d']
  },
  {
    dayOfWeek: 'Wed',
    date: '2023-12-28',
    averages: [293.31, 291.31, 290.49, 290.11, 290.28, 296.57, 303.5, 306.14],
    icons: ['04d', '04n', '03n', '02n', '02d', '03d', '01d', '01d']
  },
  {
    dayOfWeek: 'Thu',
    date: '2023-12-29',
    averages: [299.97, 297.84, 296.47, 295.89, 295.98, 303.37, 308.76, 310.24],
    icons: ['01d', '01n', '01n', '03n', '03d', '03d', '02d', '03d']
  },
  {
    dayOfWeek: 'Fri',
    date: '2023-12-30',
    averages: [302.57, 296.93, 295.79, 295.5, 295.37, 296.98, 299.83, 295.82],
    icons: ['04d', '10n', '10n', '10n', '04d', '04d', '10d', '10d']
  },
  {
    dayOfWeek: 'Sat',
    date: '2023-12-31',
    averages: [294.33, 293.44, 292.35, 291.74, 291.41, 292.8, 294.56],
    icons: ['10d', '10n', '10n', '10n', '04d', '04d', '04d']
  }
]
describe('DateNowDisplay', () => {
  test('renders ForecastWeather with no forecast message when no items are provided', () => {
    render(<ForecastWeather tempType="celsius" items={null} />)

    expect(screen.getByText('No forecast')).toBeInTheDocument()
    expect(screen.getByText('INSERT LOCATION')).toBeInTheDocument()
  })

  test('renders ForecastWeather with CustomCarousel when items are provided', () => {
    render(<ForecastWeather tempType="celsius" items={mockItems} />)

    expect(screen.getByTestId('carousel')).toBeInTheDocument()
  })
})
