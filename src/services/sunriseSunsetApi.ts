import axios from 'axios'
type SunriseSunsetLatLongAPI = { lat: number; long: number }
type Results = {
  sunrise: string
  sunset: string
  solar_noon: string
  day_length: string
  civil_twilight_begin: string
  civil_twilight_end: string
  nautical_twilight_begin: string
  nautical_twilight_end: string
  astronomical_twilight_begin: string
  astronomical_twilight_end: string
}

type SunsetSunriseAPI = {
  results: Results
  status: string
  tzId: string
}
export function openWeatherLatLongApi({
  lat,
  long
}: SunriseSunsetLatLongAPI): Promise<SunsetSunriseAPI> {
  const URL = `https://api.sunrise-sunset.org/json?lat=${lat}&lon=${long}&date=today`

  return axios.get(URL).then(({ data }) => {
    return data
  })
}
