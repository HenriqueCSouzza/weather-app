import { useState, useEffect } from 'react'
import { Box, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import BoxWeather from '../BoxWeather'
import { iconButtonSx, containerSx, containerTranslateXSx } from './sxCarousel'
import { TemperatureAverages } from '../../../utils/calculateTemperatureAverages'

const CustomCarousel = ({
  items,
  tempType
}: {
  items: TemperatureAverages[]
  tempType: 'celsius' | 'fahrenheit'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState<number>(0)

  useEffect(() => {
    function updateDimensions() {
      const selectorCarouselItems = document.querySelector('#carousel-items')
      if (selectorCarouselItems) {
        const widthValue =
          selectorCarouselItems.getBoundingClientRect().width - 80
        setItemsToShow(Math.round(widthValue / (176 + 24)))
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    )
  }
  return (
    <Box
      display="flex"
      width={1}
      alignItems="center"
      id="carousel"
      data-testid="carousel"
    >
      <IconButton
        color="white"
        sx={iconButtonSx}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={containerSx} id="carousel-items">
        <Box sx={containerTranslateXSx(currentIndex, items.length)}>
          {items.map((item, index) => (
            <BoxWeather
              key={index}
              day={item.dayOfWeek}
              icon={item.icons[0]}
              temperature={Number(item.averages[0])}
              tempType={tempType}
              temperatureAverages={item.averages}
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
