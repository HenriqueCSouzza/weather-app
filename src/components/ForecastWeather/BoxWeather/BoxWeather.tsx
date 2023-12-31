import { Box, Typography } from '@mui/material'
import StraightIcon from '@mui/icons-material/Straight'
import { convertTemp, convertSignal } from '../../../utils/convertTemp'
import WeatherImgs from '../../WeatherImgs'

type BoxWeatherProps = {
  temperatureAverages: number[]
  temperature: number
  tempType: 'celsius' | 'fahrenheit'
  icon:
    | '01d'
    | '02d'
    | '03d'
    | '04d'
    | '09d'
    | '10d'
    | '11d'
    | '13d'
    | '50d'
    | '01n'
    | '02n'
    | '03n'
    | '04n'
    | '09n'
    | '10n'
    | '11n'
    | '13n'
    | '50n'
  day: string
}

const Temperature = ({
  temperature,
  tempType,
  minMax
}: {
  temperature: number
  tempType: 'celsius' | 'fahrenheit'
  minMax: 'min' | 'max'
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',

      '.MuiTypography-body1': {
        color: ' #FFF',
        textAlign: 'center',
        textShadow: '-1.139px 1.708px 0.569px rgba(0, 0, 0, 0.10)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
      }
    }}
  >
    <StraightIcon
      color="white"
      sx={{
        fontSize: '14px',
        transform: minMax === 'min' ? 'rotate(180deg)' : 'inherit'
      }}
    />
    <Typography>
      {convertTemp[tempType](temperature) + ' ' + convertSignal[tempType]}{' '}
    </Typography>
  </Box>
)
const WeekDay = ({ day }: { day: string }) => (
  <Box
    sx={{
      filter:
        'drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))',
      '.MuiTypography-body1': {
        color: ' #FFF',
        textAlign: 'center',
        textShadow: '-1.139px 1.708px 0.569px rgba(0, 0, 0, 0.10)',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
      }
    }}
  >
    <Typography>{day}</Typography>
  </Box>
)
export default function BowWeather({
  tempType,
  icon,
  day,
  temperatureAverages
}: BoxWeatherProps) {
  const min = Math.min(...temperatureAverages)
  const max = Math.max(...temperatureAverages)

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding={2}
      sx={{
        width: '110px',
        height: '200px',
        flexShrink: 0,
        borderRadius: '11.385px',
        border: ' 0.569px solid var(--radial-suhu, #FFF)',
        background: 'rgba(255, 255, 255, 0.20)'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Temperature temperature={max} tempType={tempType} minMax="max" />
        <Temperature temperature={min} tempType={tempType} minMax="min" />
      </Box>
      <Box display="flex" justifyContent="center">
        <WeatherImgs icon={icon} width="70px" />
      </Box>
      <Box>
        <WeekDay day={day} />
      </Box>
    </Box>
  )
}
