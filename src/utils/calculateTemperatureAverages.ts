import WeatherForecast, { Icon } from '../types/forecast'

export type TemperatureAverages = {
  dayOfWeek: string
  date: string
  dailyAverage: string
  averages: string[]
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
    dailyAverage: string
    averages: string[]
    icons: Icon[]
  }[] = []

  for (const date in temperaturesByDay) {
    const { temps, icons } = temperaturesByDay[date]
    const numberOfIntervals = temps.length / 3
    const dailyAverages: string[] = []

    for (let i = 0; i < numberOfIntervals; i++) {
      const sliceStart = i * 3
      const sliceEnd = sliceStart + 3
      const intervalTemps = temps.slice(sliceStart, sliceEnd)
      const average =
        intervalTemps.reduce((acc, temp) => acc + temp, 0) /
        intervalTemps.length
      dailyAverages.push(average.toFixed(2))
    }

    const totalTemp = temps.reduce((acc, temp) => acc + temp, 0)
    const dailyAverage = (totalTemp / temps.length).toFixed(2)

    const dateTime = new Date(date.replace(' ', 'T'))
    const dayOfWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'short'
    }).format(dateTime)
    temperatureAverages.push({
      dayOfWeek,
      date,
      dailyAverage,
      averages: dailyAverages,
      icons
    })
  }
  return temperatureAverages
}
