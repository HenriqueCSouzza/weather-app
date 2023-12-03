import { Box, Grid } from '@mui/material'
import LeftWeatherView from './view/LeftWeatherView'
import RightWeatherView from './view/RightWeatherView'
function App() {
  return (
    <Box
      sx={{
        background: `linear-gradient(40deg, rgba(255,150,150,1) 0%, rgba(140,107,174,1) 100%)`
      }}
    >
      <Grid
        container
        width="100%"
        height="100%"
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'row'
        }}
      >
        <LeftWeatherView />

        <RightWeatherView />
      </Grid>
    </Box>
  )
}

export default App
