import OpenForecastWeatherProps, { ForecastItem } from './forecast'
import { AirQualityType } from './airQuality'
import { SunsetSunriseAPI } from './sunriseSunset'

type GlobalContextProps = {
  weather?: ForecastItem
  loading: boolean
  city?: string
  setCity?: React.Dispatch<React.SetStateAction<string>>
  tempType: 'celsius' | 'fahrenheit'
  setTempType: React.Dispatch<React.SetStateAction<'celsius' | 'fahrenheit'>>
  forecast?: OpenForecastWeatherProps
  airQuality?: AirQualityType
  sunriseSunset?: SunsetSunriseAPI
}

export default GlobalContextProps
