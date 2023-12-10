import axios from 'axios'
import { SunsetSunriseAPI } from '../types/sunriseSunset'
type SunriseSunsetLatLongAPI = { lat?: number; long?: number }

export function sunriseSunsetLatLongApi({
  lat,
  long
}: SunriseSunsetLatLongAPI): Promise<SunsetSunriseAPI> {
  const URL = `https://api.sunrise-sunset.org/json?lat=${lat}&lon=${long}&date=today`

  return axios.get(URL).then(({ data }) => {
    return data
  })
}
