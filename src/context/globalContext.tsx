import { createContext, useMemo, useState, useEffect } from 'react'
import { useQuery, useQueries } from '@tanstack/react-query'
import useGeolocation, { GeolocationData } from '../hooks/useGeolocation'
import {
  openWeatherAirQualityApi,
  openWeatherLatLongApi,
  openWeatherApi,
  OpenWeatherApi
} from '../services/openWeatherMap'
import { sunriseSunsetLatLongApi } from '../services/sunriseSunsetApi'
import OpenForecastWeatherProps, { ForecastItem } from '../types/forecast'
import GlobalContextProps from '../types/context'
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
  const { location } = useGeolocation()
  const { data, isLoading: loading } = useQuery({
    queryKey: ['weather', city],
    queryFn: ({ queryKey }) => openWeatherApi({ city: queryKey[1] }),
    enabled: !!city
  })
  const lat = forecast?.city?.coord?.lat
  const lon = forecast?.city?.coord?.lon

  useEffect(() => {}, [])

  const [air, sunset] = useQueries({
    queries: [
      {
        queryKey: ['airQuality', lat, lon],
        queryFn: () =>
          openWeatherAirQualityApi({
            lat: lat,
            long: lon
          }),
        enabled: !!forecast,
        throwOnError: (error: Error) => {
          console.error('Ocorreu um erro na query:', error)
          return false
        }
      },
      {
        queryKey: ['sunriseSunset', lat, lon],
        queryFn: () =>
          sunriseSunsetLatLongApi({
            lat: lat,
            long: lon
          }),
        enabled: !!forecast,
        throwOnError: (error: Error) => {
          console.error('Ocorreu um erro na query:', error)
          return false
        }
      }
    ]
  })

  async function runForecast(location: GeolocationData) {
    try {
      const data = await openWeatherLatLongApi({
        lat: location.latitude,
        long: location.longitude
      })

      if (data) {
        console.log({ data })
        setForecast(data)
        setWeather(data?.list[0])
      }
    } catch (error) {
      console.error('Error fetching forecast:', error)
    }
  }

  useEffect(() => {
    if (location.latitude !== null && location.longitude !== null) {
      runForecast(location)
    }
  }, [location.error, location.latitude, location.longitude])

  useEffect(() => {
    if (data as OpenWeatherApi) {
      if (data?.forecast) {
        setForecast(data?.forecast)
        setWeather(data?.forecast?.list[0])
      }
    }
    if (air) {
      setAirQuality(air.data)
    }
    if (sunset) {
      setSunriseSunset(sunset.data)
    }
  }, [air, data, sunset])

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
