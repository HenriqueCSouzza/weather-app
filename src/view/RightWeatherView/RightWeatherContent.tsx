import { Grid } from '@mui/material'
import ClockBox from '../../components/ClockBox'
// type RightWeatherContentProps = {}

export default function RightWeatherContent() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ xs: 'center', sm: 'center', md: 'space-evenly' }}
    >
      <Grid item mt={{ xs: 0, sm: 0, md: 8 }}>
        <ClockBox title="Sunrise" hourBegin="7:15:09 AM" />
      </Grid>
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ClockBox
          title="Golden Hour"
          hourBegin="6:48:01 AM"
          hourEnd="5:30:01 PM"
        />
      </Grid>
      <Grid mt={{ xs: 0, sm: 0, md: 8 }} item>
        <ClockBox title="Sunset" hourBegin="5:02:53 PM" />
      </Grid>
    </Grid>
  )
}
