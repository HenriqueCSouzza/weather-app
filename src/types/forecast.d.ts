import type OpenWeather from './openWeather'

type Coord = { lat: number; lon: number }
type City = {
  coord: Coord
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

type ForecastWeather = {
  cod: string
  message: number
  cnt: number
  list: OpenWeather[]
}

export default ForecastWeather
