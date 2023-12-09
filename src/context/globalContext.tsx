import { createContext, useMemo, useState, useEffect } from 'react'
import GlobalContextProps from '../types/context'
import OpenForecastWeatherProps, { ForecastItem } from '../types/forecast'
import { openWeatherApi, OpenWeatherApi } from '../services/openWeatherMap'
import { useQuery } from '@tanstack/react-query'
import { AirQualityType } from '../types/airQuality'
import { SunsetSunriseAPI } from '../types/sunriseSunset'
const globalContext = createContext<GlobalContextProps>({
  loading: false,
  tempType: 'celsius',
  setTempType: (type) => type
})

export default globalContext

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<ForecastItem>()
  const [forecast, setForecast] = useState<OpenForecastWeatherProps>()
  const [sunriseSunset, setSunriseSunset] = useState<SunsetSunriseAPI>()
  const [airQuality, setAirQuality] = useState<AirQualityType>()
  const [city, setCity] = useState<string>('')
  const [tempType, setTempType] = useState<'celsius' | 'fahrenheit'>('celsius')
  const { data, isLoading: loading } = useQuery({
    queryKey: ['weather', city],
    queryFn: ({ queryKey }) => openWeatherApi({ city: queryKey[1] }),
    enabled: !!city
  })

  console.log(sunriseSunset)
  useEffect(() => {
    if (data as OpenWeatherApi) {
      if (data?.forecast) {
        setForecast(data?.forecast)
        setWeather(data?.forecast?.list[0])
      }
      if (data?.airQuality) {
        setAirQuality(data?.airQuality)
      }

      if (data?.sunriseSunset) {
        setSunriseSunset(data?.sunriseSunset)
      }
    }
  }, [data])

  const valueMemo = useMemo<GlobalContextProps>(
    () => ({
      weather,
      setWeather,
      loading,
      city,
      setCity,
      tempType,
      setTempType,
      forecast,
      sunriseSunset,
      airQuality
    }),
    [weather, loading, city, tempType, forecast, sunriseSunset, airQuality]
  )

  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  )
}
