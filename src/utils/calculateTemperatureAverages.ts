import WeatherForecast, { Icon } from '../types/forecast'

export type TemperatureAverages = {
  dayOfWeek: string
  date: string
  averages: number[]
  icons: Icon[]
}

export default function calculateTemperatureAverages(
  forecast?: WeatherForecast
): TemperatureAverages[] | null {
  const temperaturesByDay: {
    [date: string]: { temps: number[]; icons: Icon[] }
  } = {}

  if (!forecast) {
    return null
  }

  forecast.list.forEach((data) => {
    const dateTime = new Date(data.dt_txt.replace(' ', 'T'))
    const date = dateTime.toISOString().split('T')[0]

    if (!temperaturesByDay[date]) {
      temperaturesByDay[date] = { temps: [], icons: [] }
    }

    temperaturesByDay[date].temps.push(data.main.temp)
    temperaturesByDay[date].icons.push(data.weather[0].icon)
  })

  const temperatureAverages: {
    dayOfWeek: string
    date: string
    averages: number[]
    icons: Icon[]
  }[] = []

  for (const date in temperaturesByDay) {
    const { temps, icons } = temperaturesByDay[date]

    const dateTime = new Date(date.replace(' ', 'T'))
    const dayOfWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'short'
    }).format(dateTime)

    temperatureAverages.push({
      dayOfWeek,
      date,
      averages: temps,
      icons
    })
  }
  return temperatureAverages
}
