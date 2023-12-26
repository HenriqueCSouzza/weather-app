import { Box, Grid } from '@mui/material'
import LeftWeatherHeader from './LeftWeatherHeader'
import LeftWeatherContent from './LeftWeatherContent'
import useWeather from '../../hooks/useWeather'
import calculateTemperatureAverages from '../../utils/calculateTemperatureAverages'
import MobileSearchLocation from '../../components/SearchLocationBox/MobileSearchLocation'
export default function LeftWeatherView() {
  const { weather, tempType, forecast, city, setCity } = useWeather()

  const weatherForecast = calculateTemperatureAverages(forecast)
  return (
    <>
      <Grid item xs={12} sm={12} md={7}>
        <Box p={4}>
          <MobileSearchLocation
            city={city}
            setCity={setCity}
            name={forecast?.city.name}
          />
          <LeftWeatherHeader icon={weather?.weather[0].icon} />
          <LeftWeatherContent
            tempType={tempType}
            weather={weather}
            forecast={weatherForecast}
          />
        </Box>
      </Grid>
    </>
  )
}
