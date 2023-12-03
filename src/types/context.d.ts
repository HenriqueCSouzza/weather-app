import OpenWeatherProps from './openWeather'
import OpenForecastWeatherProps from './forecast'

type GlobalContextProps = {
  weather?: OpenWeatherProps
  setWeather?: React.Dispatch<React.SetStateAction<OpenWeatherProps>>
  loading: boolean
  city?: string
  setCity?: React.Dispatch<React.SetStateAction<string>>
  tempType: 'celsius' | 'fahrenheit'
  setTempType: React.Dispatch<React.SetStateAction<'celsius' | 'fahrenheit'>>
  forecast?: OpenForecastWeatherProps
  setForecast?: React.Dispatch<
    React.SetStateAction<OpenForecastWeatherProps | uindefined>
  >
}

export default GlobalContextProps
