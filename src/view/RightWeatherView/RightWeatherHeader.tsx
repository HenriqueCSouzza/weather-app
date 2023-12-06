import useWeather from '../../hooks/useWeather'
import SearchLocationBox from '../../components/SearchLocationBox'

export default function RightWeatherHeader() {
  const { setCity, city } = useWeather()

  return <SearchLocationBox city={city} setCity={setCity} />
}
