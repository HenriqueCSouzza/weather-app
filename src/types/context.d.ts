import OpenForecastWeatherProps, { ForecastItem } from './forecast'

type GlobalContextProps = {
  weather?: ForecastItem
  setWeather?: React.Dispatch<React.SetStateAction<ForecastItem | undefined>>
  loading: boolean
  city?: string
  setCity?: React.Dispatch<React.SetStateAction<string>>
  tempType: 'celsius' | 'fahrenheit'
  setTempType: React.Dispatch<React.SetStateAction<'celsius' | 'fahrenheit'>>
  forecast?: OpenForecastWeatherProps
  setForecast?: React.Dispatch<
    React.SetStateAction<OpenForecastWeatherProps | undefined>
  >
}

export default GlobalContextProps
