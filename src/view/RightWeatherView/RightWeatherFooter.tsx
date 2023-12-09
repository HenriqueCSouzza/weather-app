import { Box } from '@mui/material'
import AirQualityMeter from '../../components/AirQualityMeter/AirQualityMeter'
import useWeather from '../../hooks/useWeather'
export default function RightWeatherFooter() {
  const { airQuality } = useWeather()

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <AirQualityMeter title="Air Quality" air={airQuality?.list[0].main.aqi} />
    </Box>
  )
}
