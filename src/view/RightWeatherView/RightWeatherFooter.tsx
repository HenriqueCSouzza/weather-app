import { Box } from '@mui/material'
import AirQualityMeter from '../../components/AirQualityMeter/AirQualityMeter'
// type RightWeatherFooterProps = {}

export default function RightWeatherFooter() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <AirQualityMeter air={1} title="Air Quality" />
    </Box>
  )
}
