import { createContext, useMemo, useState, useEffect } from 'react'
import GlobalContextProps from '../types/context'
import OpenForecastWeatherProps, { ForecastItem } from '../types/forecast'
import { openWeatherApi } from '../services/openWeatherMap'
import { useQuery } from '@tanstack/react-query'
const globalContext = createContext<GlobalContextProps>({
  loading: false,
  tempType: 'celsius',
  setTempType: (type) => type
})

export default globalContext

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<ForecastItem>()
  const [forecast, setForecast] = useState<OpenForecastWeatherProps>()
  const [city, setCity] = useState<string>('')
  const [tempType, setTempType] = useState<'celsius' | 'fahrenheit'>('celsius')
  const { data, isLoading: loading } = useQuery({
    queryKey: ['weather', city],
    queryFn: ({ queryKey }) => openWeatherApi({ city: queryKey[1] }),
    enabled: !!city
  })

  useEffect(() => {
    if (data as OpenForecastWeatherProps) {
      setForecast(data as OpenForecastWeatherProps)
      setWeather(data?.list[0])
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
      setForecast
    }),
    [
      weather,
      setWeather,
      loading,
      city,
      setCity,
      tempType,
      setTempType,
      forecast,
      setForecast
    ]
  )

  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  )
}
