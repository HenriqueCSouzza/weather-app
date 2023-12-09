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
  '01d': '/src/components/WeatherImgs/imgs/01d.png',
  '02d': '/src/components/WeatherImgs/imgs/02d.png',
  '03d': '/src/components/WeatherImgs/imgs/03d.png',
  '04d': '/src/components/WeatherImgs/imgs/04d.png',
  '09d': '/src/components/WeatherImgs/imgs/09d.png',
  '10d': '/src/components/WeatherImgs/imgs/10d.png',
  '11d': '/src/components/WeatherImgs/imgs/11d.png',
  '13d': '/src/components/WeatherImgs/imgs/13d.png',
  '50d': '/src/components/WeatherImgs/imgs/50d.png',
  '01n': '/src/components/WeatherImgs/imgs/01n.png',
  '02n': '/src/components/WeatherImgs/imgs/02n.png',
  '03n': '/src/components/WeatherImgs/imgs/03n.png',
  '04n': '/src/components/WeatherImgs/imgs/04n.png',
  '09n': '/src/components/WeatherImgs/imgs/09n.png',
  '10n': '/src/components/WeatherImgs/imgs/10n.png',
  '11n': '/src/components/WeatherImgs/imgs/11n.png',
  '13n': '/src/components/WeatherImgs/imgs/13n.png',
  '50n': '/src/components/WeatherImgs/imgs/50n.png'
}
