import { Box } from '@mui/material'
import { convertTemp, convertSignal } from '../../utils/convertTemp'
import TemperatureNumber from '../../components/TemperatureNumber'
import TemperatureUniMed from '../../components/TemperatureUniMed'
import DateNowDisplay from '../../components/DateNowDisplay'
import ClimaticDisplay from '../../components/ClimaticDisplay'
import ForecastWeather from '../../components/ForecastWeather'
import type { TemperatureAverages } from '../../utils/calculateTemperatureAverages'

type LeftWeatherContentProps = {
  tempType: 'celsius' | 'fahrenheit'
  temp?: number
  forecast: TemperatureAverages[] | null
}

export default function LeftWeatherContent({
  tempType,
  temp,
  forecast
}: LeftWeatherContentProps) {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Box width="245px" display="flex">
        <TemperatureNumber>
          {temp ? convertTemp[tempType](temp) : 0}
        </TemperatureNumber>
        <TemperatureUniMed>{convertSignal[tempType]}</TemperatureUniMed>
      </Box>
      <DateNowDisplay />
      <ClimaticDisplay />
      {forecast ? (
        <ForecastWeather tempType={tempType} items={forecast} />
      ) : null}
    </Box>
  )
}
