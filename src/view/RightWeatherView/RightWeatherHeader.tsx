import useWeather from '../../hooks/useWeather'
import SearchLocationBox from '../../components/SearchLocationBox'
import { Box } from '@mui/material'
export default function RightWeatherHeader() {
  const { setCity, city, forecast } = useWeather()

  return (
    <Box
      width="100%"
      sx={{
        display: { xs: 'none', sm: 'none', md: 'inherit' }
      }}
    >
      <SearchLocationBox
        city={city}
        setCity={setCity}
        name={forecast?.city.name}
      />
    </Box>
  )
}
