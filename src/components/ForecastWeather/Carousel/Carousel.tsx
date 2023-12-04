import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import BoxWeather from '../BoxWeather'
import { iconButtonSx, containerSx, containerTranslateXSx } from './sxCarousel'
import { TemperatureAverages } from '../../../utils/calculateTemperatureAverages'

const CustomCarousel = ({
  items,
  itemsToShow = 3,
  tempType
}: {
  items: TemperatureAverages[]
  itemsToShow: number
  tempType: 'celsius' | 'fahrenheit'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    )
  }

  return (
    <Box display="flex" width={1} alignItems="center">
      <IconButton
        color="white"
        sx={iconButtonSx}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={containerSx}>
        <Box sx={containerTranslateXSx(currentIndex, itemsToShow)}>
          {items.map((item, index) => (
            <BoxWeather
              key={index}
              day={item.dayOfWeek}
              icon={item.icons[0]}
              temperature={Number(item.averages[0])}
              tempType={tempType}
            />
          ))}
        </Box>
      </Box>
      <IconButton
        color="white"
        sx={iconButtonSx}
        onClick={handleNext}
        disabled={currentIndex === Math.round(items.length / itemsToShow)}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  )
}

export default CustomCarousel
