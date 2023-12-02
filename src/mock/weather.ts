import { OpenWeather } from "../types/openWeather";

export const openWeatherMock: OpenWeather = {
  coord: {
    lon: -46.6361,
    lat: -23.5475,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 296.94,
    feels_like: 297.59,
    temp_min: 295.35,
    temp_max: 298.96,
    pressure: 1014,
    humidity: 85,
  },
  visibility: 10000,
  wind: {
    speed: 1.03,
    deg: 0,
  },
  clouds: {
    all: 75,
  },
  dt: 1701289219,
  sys: {
    type: 1,
    id: 8394,
    country: "BR",
    sunrise: 1701245494,
    sunset: 1701293900,
  },
  timezone: -10800,
  id: 3448439,
  name: "São Paulo",
  cod: 200,
};
