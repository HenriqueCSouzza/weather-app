import { Box, Typography } from '@mui/material'
import CloudOffTwoToneIcon from '@mui/icons-material/CloudOffTwoTone'
import CustomCarousel from './Carousel/Carousel'
import { TemperatureAverages } from '../../utils/calculateTemperatureAverages'

export default function ForecastWeather({
  tempType,
  items
}: {
  tempType: 'celsius' | 'fahrenheit'
  items: TemperatureAverages[] | null
}) {
  if (!items || items.length === 0) {
    return (
      <Box
        sx={{
          filter:
            'drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))',
          textAlign: 'center',
          height: 266,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box>
          <CloudOffTwoToneIcon sx={{ fontSize: 100 }} color="white" />
          <Typography variant="h4" component="p" color="#fff">
            No forecast
          </Typography>
          <Typography variant="body2" color="#fff">
            INSERT LOCATION
          </Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box display="flex" gap={9}>
      <CustomCarousel items={items} tempType={tempType} />
    </Box>
  )
}
