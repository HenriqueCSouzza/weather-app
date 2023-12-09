import { useContext } from 'react'
import GlobalContextProps from '../types/context'
import globalContext from '../context/globalContext'

export default function useWeather(): GlobalContextProps {
  const {
    weather,
    loading,
    city,
    setCity,
    setTempType,
    tempType,
    forecast,
    airQuality,
    sunriseSunset
  } = useContext<GlobalContextProps>(globalContext)

  return {
    weather,
    loading,
    city,
    setCity,
    setTempType,
    tempType,
    forecast,
    airQuality,
    sunriseSunset
  }
}
