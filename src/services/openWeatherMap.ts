import axios from 'axios'
import OpenForecastWeatherProps from '../types/forecast'
import { SunsetSunriseAPI } from '../types/sunriseSunset'
import { AirQualityType } from '../types/airQuality'
import { sunriseSunsetLatLongApi } from './sunriseSunsetApi'
type OpenWeatherLatLong = { lat: number; long: number }
type OpenWeatherCity = { city: string }

export type OpenWeatherApi = Promise<{
  forecast: OpenForecastWeatherProps
  airQuality: AirQualityType
  sunriseSunset: SunsetSunriseAPI
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
      const response = await Promise.all([
        openWeatherAirQualityApi({
          lat: data.city.coord.lat,
          long: data.city.coord.lon
        }),
        sunriseSunsetLatLongApi({
          lat: data.city.coord.lat,
          long: data.city.coord.lon
        })
      ])

      return {
        forecast: data,
        airQuality: response[0],
        sunriseSunset: response[1]
      }
    })
}

export function openWeatherAirQualityApi({
  lat,
  long
}: OpenWeatherLatLong): Promise<AirQualityType> {
  const encodeURL = encodeURI(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
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
