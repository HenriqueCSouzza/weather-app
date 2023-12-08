import axios from 'axios'
import OpenForecastWeatherProps from '../types/forecast'
type OpenWeatherLatLong = { lat: number; long: number }
type OpenWeatherCity = { city: string }

export function openWeatherApi({
  city
}: OpenWeatherCity): Promise<OpenForecastWeatherProps> | null {
  const encodeURL = encodeURI(
    import.meta.env.VITE_OPEN_WEATHER_API_URL +
      `?q=${city}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
  )

  if (!city) {
    return null
  }

  return axios.get(encodeURL).then(({ data }) => {
    return data
  })
}

export function openWeatherAirQualityApi({
  lat,
  long
}: OpenWeatherLatLong): Promise<OpenForecastWeatherProps> | null {
  const encodeURL = encodeURI(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=-23.5475&lon=-46.6361&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`
  )

  if (!lat && !long) {
    return null
  }

  return axios.get(encodeURL).then(({ data }) => {
    return data
  })
}

export function openWeatherLatLongApi({
  lat,
  long
}: OpenWeatherLatLong): Promise<unknown> {
  const encodeURL = encodeURI(
    process.env.VITE_OPEN_WEATHER_API_URL +
      `?lat=${lat}&lon=${long}&appid=${process.env.VITE_OPEN_WEATHER_API_KEY}`
  )
  return axios.get(encodeURL).then(({ data }) => {
    return data
  })
}
