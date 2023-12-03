import { createContext, useMemo, useState, useEffect } from 'react'
import GlobalContextProps from '../types/context'
import OpenWeatherProps from '../types/openWeather'
import OpenForecastWeatherProps from '../types/forecast'

import { openWeatherApi } from '../services/openWeatherMap'
import { useQuery } from '@tanstack/react-query'
import { openWeatherMock } from '../mock/weather'
import { weatherForecast } from '../mock/weatherForecast'

const globalContext = createContext<GlobalContextProps>({
  loading: false,
  tempType: 'celsius',
  setTempType: (type) => type
})

export default globalContext

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<OpenWeatherProps>(openWeatherMock)
  const [forecast, setForecast] = useState<OpenForecastWeatherProps>()
  const [city, setCity] = useState<string>('')
  const [tempType, setTempType] = useState<'celsius' | 'fahrenheit'>('celsius')
  const { data, isLoading: loading } = useQuery({
    queryKey: ['weather', city],
    queryFn: ({ queryKey }) => openWeatherApi({ city: queryKey[1] }),
    enabled: !!city
  })

  useEffect(() => {
    if (data) {
      setWeather(data as OpenWeatherProps)
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

  console.log(tempType)
  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  )
}
