import { Box, Grid } from '@mui/material'
import ClockBox from '../../components/ClockBox'
import loading from './imgs/time flies-amico.png'
import { parseTimeString } from '../../utils/formatDate'
import useWeather from '../../hooks/useWeather'

export default function RightWeatherContent() {
  const { sunriseSunset } = useWeather()
  const sunriseDate = sunriseSunset
    ? parseTimeString(sunriseSunset?.results.sunrise)
    : undefined
  const sunsetDate = sunriseSunset
    ? parseTimeString(sunriseSunset?.results.sunset)
    : undefined
  const civilTwilightBeginDate = sunriseSunset
    ? parseTimeString(sunriseSunset?.results.civil_twilight_begin)
    : undefined

  if (!sunriseSunset) {
    return (
      <Box
        sx={{
          alignSelf: 'center',
          img: {
            maxHeight: '438px'
          }
        }}
      >
        <img src={loading} alt="clock loading" />
      </Box>
    )
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ xs: 'center', sm: 'center', md: 'space-evenly' }}
      spacing={{ xs: 8, sm: 0, md: 0 }}
    >
      <Grid item mt={{ xs: 0, sm: 8, md: 8 }}>
        <ClockBox
          title="Sunrise"
          hourBegin={sunriseSunset?.results.sunrise || ''}
          dt={sunriseDate}
        />
      </Grid>
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ClockBox
          title="Golden Hour"
          hourBegin={sunriseSunset?.results.civil_twilight_begin || ''}
          hourEnd={sunriseSunset?.results.civil_twilight_end || ''}
          dt={sunsetDate}
        />
      </Grid>
      <Grid mt={{ xs: 0, sm: 8, md: 8 }} item>
        <ClockBox
          title="Sunset"
          hourBegin={sunriseSunset?.results.sunset || ''}
          dt={civilTwilightBeginDate}
        />
      </Grid>
    </Grid>
  )
}
