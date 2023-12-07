import { Box, Grid, Divider } from '@mui/material'
import { sxRightWeatherView } from './sxRightWeatherView'
import RightWeatherHeader from './RightWeatherHeader'
import RightWeatherContent from './RightWeatherContent'
import RightWeatherFooter from './RightWeatherFooter'

export default function RightWeatherView() {
  return (
    <Grid item xs={12} sm={12} md={5} sx={sxRightWeatherView} minHeight={900}>
      <Box display="flex" gap={6} flexDirection="column">
        <RightWeatherHeader />
        <RightWeatherContent />
        <Divider sx={{ background: '#fff' }} />
        <RightWeatherFooter />
      </Box>
    </Grid>
  )
}
