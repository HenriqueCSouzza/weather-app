import axios from 'axios'
import OpenForecastWeatherProps from '../types/forecast'
import { AirQualityType } from '../types/airQuality'
type OpenWeatherLatLong = { lat?: number; long?: number }
type OpenWeatherCity = { city: string }

export type OpenWeatherApi = Promise<{
  forecast: OpenForecastWeatherProps
}> | null

export function openWeatherApi({ city }: OpenWeatherCity): OpenWeatherApi {
  const encodeURL = encodeURI(
    import.meta.env.VITE_OPEN_WEATHER_API_URL +
      `?q=${city}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
  )

  if (!city) {
    return null
  }

  return axios
    .get(encodeURL)
    .then(async ({ data }: { data: OpenForecastWeatherProps }) => {
      return {
        forecast: data
      }
    })
}

export function openWeatherAirQualityApi({
  lat,
  long
}: OpenWeatherLatLong): Promise<AirQualityType> {
  const encodeURL = encodeURI(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${
      import.meta.env.VITE_AIR_QUALITY_API_KEY
    }`
  )

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
