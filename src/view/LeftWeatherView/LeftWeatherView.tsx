import { Box, Grid } from '@mui/material'
import LeftWeatherHeader from './LeftWeatherHeader'
import LeftWeatherContent from './LeftWeatherContent'
import useWeather from '../../hooks/useWeather'
import calculateTemperatureAverages from '../../utils/calculateTemperatureAverages'
export default function LeftWeatherView() {
  const { weather, tempType, forecast } = useWeather()

  const weatherForecast = calculateTemperatureAverages(forecast)
  console.log(weather)
  return (
    <Grid item xs={12} sm={12} md={7}>
      <Box p={4} id="left-weather-view">
        <LeftWeatherHeader icon={weather?.weather[0].icon} />
        <LeftWeatherContent
          tempType={tempType}
          weather={weather}
          forecast={weatherForecast}
        />
      </Box>
    </Grid>
  )
}
