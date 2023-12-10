import Image01d from './01d.png'
import Image02d from './02d.png'
import Image03d from './03d.png'
import Image04d from './04d.png'
import Image09d from './09d.png'
import Image10d from './10d.png'
import Image11d from './11d.png'
import Image13d from './13d.png'
import Image50d from './50d.png'
import Image01n from './01n.png'
import Image02n from './02n.png'
import Image03n from './03n.png'
import Image04n from './04n.png'
import Image09n from './09n.png'
import Image10n from './10n.png'
import Image11n from './11n.png'
import Image13n from './13n.png'
import Image50n from './50n.png'
type WeatherType =
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

type WeatherObject = {
  [key in WeatherType]: string
}

export const weatherObject: WeatherObject = {
  '01d': Image01d,
  '02d': Image02d,
  '03d': Image03d,
  '04d': Image04d,
  '09d': Image09d,
  '10d': Image10d,
  '11d': Image11d,
  '13d': Image13d,
  '50d': Image50d,
  '01n': Image01n,
  '02n': Image02n,
  '03n': Image03n,
  '04n': Image04n,
  '09n': Image09n,
  '10n': Image10n,
  '11n': Image11n,
  '13n': Image13n,
  '50n': Image50n
}
