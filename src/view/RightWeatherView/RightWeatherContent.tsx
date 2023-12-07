import { Grid } from '@mui/material'
import ClockBox from '../../components/ClockBox'
import { parseTimeString } from '../../utils/formatDate'
// import useWeather from '../../hooks/useWeather'
// type RightWeatherContentProps = {}

export default function RightWeatherContent() {
  // const { weather } = useWeather()

  const sunriseDate = parseTimeString('7:15:09 AM')
  const sunsetDate = parseTimeString('7:15:09 AM')
  const civilTwilightBeginDate = parseTimeString('11:15:09 PM')

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ xs: 'center', sm: 'center', md: 'space-evenly' }}
      spacing={{ xs: 8, sm: 0, md: 0 }}
    >
      <Grid item mt={{ xs: 0, sm: 8, md: 8 }}>
        <ClockBox title="Sunrise" hourBegin="7:15:09 AM" dt={sunriseDate} />
      </Grid>
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ClockBox
          title="Golden Hour"
          hourBegin="6:48:01 AM"
          hourEnd="5:30:01 PM"
          dt={sunsetDate}
        />
      </Grid>
      <Grid mt={{ xs: 0, sm: 8, md: 8 }} item>
        <ClockBox
          title="Sunset"
          hourBegin="5:02:53 PM"
          dt={civilTwilightBeginDate}
        />
      </Grid>
    </Grid>
  )
}
