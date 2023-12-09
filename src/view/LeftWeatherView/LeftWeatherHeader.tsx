import { Box } from '@mui/material'
import TemperatureSwitch from '../../components/TemperatureSwitch'
import WeatherImgs from '../../components/WeatherImgs'
import { Weather } from '../../types/openWeather'
import useWeather from '../../hooks/useWeather'
type LeftWeatherHeaderProps = {
  icon?: Weather['icon']
}

export default function LeftWeatherHeader({ icon }: LeftWeatherHeaderProps) {
  const { setTempType } = useWeather()

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      minHeight="133px"
      aria-label="Weather information"
      role="region"
      mb={3}
    >
      <Box>
        <WeatherImgs
          icon={icon}
          aria-label="Weather icon representing the current weather"
        />
      </Box>
      <TemperatureSwitch
        aria-label="Switch between Celsius and Fahrenheit temperatures"
        onChange={(e) => {
          const { target } = e

          if (target.checked) {
            setTempType('fahrenheit')
          } else {
            setTempType('celsius')
          }
        }}
      />
    </Box>
  )
}
