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
      mb={3}
    >
      <Box>
        <WeatherImgs icon={icon} />
      </Box>
      <TemperatureSwitch
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
