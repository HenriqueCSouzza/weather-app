type CoordType = { lon: number; lat: number }

type MainType = { aqi: 1 | 2 | 3 | 4 | 5 }

type ComponentsType = {
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  nh3: number
}
type AirItem = {
  dt: number
  main: MainType
  components: ComponentsType
}

export type AirQualityType = {
  coord: CoordType
  list: AirItem[]
}
