export type Icon =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '09d'
  | '10d'
  | '11d'
  | '13d'
  | '50d'
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n'

interface Weather {
  id: number
  main: string
  description: string
  icon: Icon
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface Clouds {
  all: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

interface Sys {
  pod: string
}

interface City {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface Rain {
  [key: string]: number
}
interface ForecastItem {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind?: Wind
  rain?: Rain
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}

export interface WeatherForecast {
  cod: string
  message: number
  cnt: number
  list: ForecastItem[]
  city: City
}

export default WeatherForecast
