import { weatherObject } from './imgs'

type WeatherImages = {
  icon?:
    | '01d'
    | '02d'
    | '03d'
    | '04d'
    | '09d'
    | '10d'
    | '11d'
    | '13d'
    | '50d'
    | '01n'
    | '02n'
    | '03n'
    | '04n'
    | '09n'
    | '10n'
    | '11n'
    | '13n'
    | '50n'
  width?: string
}

export default function WeatherImages({
  icon,
  width = '143px'
}: WeatherImages) {
  return icon ? (
    <img src={weatherObject[icon]} width={width} alt="WeatherImage" />
  ) : null
}
