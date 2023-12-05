import { Box, Grid } from '@mui/material'
import { sxRightWeatherView } from './sxRightWeatherView'

export default function RightWeatherView() {
  return (
    <Grid item xs={12} sm={12} md={5} sx={sxRightWeatherView}>
      <Box px={4} pt={4}>
        RightWeatherView
      </Box>
    </Grid>
  )
}
