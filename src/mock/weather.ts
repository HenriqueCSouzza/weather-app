import { OpenWeather } from '../types/openWeather'

export const openWeatherMock: OpenWeather = {
  coord: {
    lon: -46.6361,
    lat: -23.5475
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 299.23,
    feels_like: 299.23,
    temp_min: 298.35,
    temp_max: 300.42,
    pressure: 1021,
    humidity: 70
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 10
  },
  clouds: {
    all: 75
  },
  dt: 1701864701,
  sys: {
    type: 2,
    id: 2082654,
    country: 'BR',
    sunrise: 1701850326,
    sunset: 1701898989
  },
  timezone: -10800,
  id: 3448439,
  name: 'São Paulo',
  cod: 200
}
