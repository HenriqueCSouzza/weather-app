import { Box } from '@mui/material'
import CustomCarousel from './Carousel/Carousel'
import { TemperatureAverages } from '../../utils/calculateTemperatureAverages'

export default function ForecastWeather({
  tempType,
  items
}: {
  tempType: 'celsius' | 'fahrenheit'
  items: TemperatureAverages[] | null
}) {
  if (!items) {
    return null
  }

  return (
    <Box display="flex" gap={9}>
      <CustomCarousel items={items} itemsToShow={3} tempType={tempType} />
    </Box>
  )
}
