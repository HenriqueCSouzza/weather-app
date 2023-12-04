import { Box, Grid } from '@mui/material'
import LeftWeatherHeader from './LeftWeatherHeader'
import LeftWeatherContent from './LeftWeatherContent'
import useWeather from '../../hooks/useWeather'
import calculateTemperatureAverages from '../../utils/calculateTemperatureAverages'

export default function LeftWeatherView() {
  const { weather, tempType, forecast } = useWeather()

  const weatherForecast = calculateTemperatureAverages(forecast)

  return (
    <Grid item xs={12} sm={12} md={7}>
      <Box p={8}>
        <LeftWeatherHeader icon={weather?.weather[0].icon} />
        <LeftWeatherContent
          tempType={tempType}
          temp={weather?.main.temp}
          forecast={weatherForecast}
        />
      </Box>
    </Grid>
  )
}
