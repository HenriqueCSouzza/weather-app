import { Box } from '@mui/material'
import { convertTemp, convertSignal } from '../../utils/convertTemp'
import TemperatureNumber from '../../components/TemperatureNumber'
import TemperatureUniMed from '../../components/TemperatureUniMed'
import DateNowDisplay from '../../components/DateNowDisplay'
import ClimaticDisplay from '../../components/ClimaticDisplay'
import ForecastWeather from '../../components/ForecastWeather'
import type { TemperatureAverages } from '../../utils/calculateTemperatureAverages'
import { ForecastItem } from '../../types/forecast'

type LeftWeatherContentProps = {
  tempType: 'celsius' | 'fahrenheit'
  temp?: number
  forecast: TemperatureAverages[] | null
  weather?: ForecastItem
}

export default function LeftWeatherContent({
  tempType,
  forecast,
  weather
}: LeftWeatherContentProps) {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box width="245px" display="flex">
        <TemperatureNumber>
          {weather?.main.temp ? convertTemp[tempType](weather?.main.temp) : 0}
        </TemperatureNumber>
        <TemperatureUniMed>{convertSignal[tempType]}</TemperatureUniMed>
      </Box>
      <DateNowDisplay />
      <ClimaticDisplay
        drizzle={weather?.rain?.['3h']}
        humidity={weather?.main.humidity}
        wind={weather?.wind?.speed}
      />
      <ForecastWeather tempType={tempType} items={forecast} />
    </Box>
  )
}
