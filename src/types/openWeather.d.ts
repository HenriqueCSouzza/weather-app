export type Coord = { lon: number; lat: number };
export type Weather = {
  id: number;
  main:
    | "Fog"
    | "Thunderstorm"
    | "Drizzle"
    | "Rain"
    | "Snow"
    | "Mist"
    | "Smoke"
    | "Haze"
    | "Dust"
    | "Sand"
    | "Ash"
    | "Squall"
    | "Tornado"
    | "Clouds";
  description: string;
  icon:
    | "01d"
    | "02d"
    | "03d"
    | "04d"
    | "09d"
    | "10d"
    | "11d"
    | "13d"
    | "50d"
    | "01n"
    | "02n"
    | "03n"
    | "04n"
    | "09n"
    | "10n"
    | "11n"
    | "13n"
    | "50n";
};
export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};
export type Wind = { speed: number; deg: number };
export type Clouds = { all: number };
export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type OpenWeather = {
  coord: Coord;
  weather: [Weather];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export default OpenWeather;
