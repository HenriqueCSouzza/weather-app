import { useState, useEffect } from 'react'

export interface GeolocationData {
  latitude: number | null
  longitude: number | null
  error: string | null
}

interface useGeolocation {
  location: GeolocationData
}
const useGeolocation = (): useGeolocation => {
  const [location, setLocation] = useState<GeolocationData>({
    latitude: null,
    longitude: null,
    error: null
  })

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      })
    }

    const errorHandler = (error: GeolocationPositionError) => {
      setLocation({
        latitude: null,
        longitude: null,
        error: error.message
      })
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Geolocalização não é suportada neste navegador.'
      })
    }
  }, [])

  return { location }
}

export default useGeolocation
