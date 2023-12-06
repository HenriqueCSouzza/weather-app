import { Box, Grid } from '@mui/material'
import LeftWeatherView from './view/LeftWeatherView'
import RightWeatherView from './view/RightWeatherView'
function App() {
  return (
    <Box>
      <Grid
        container
        flexDirection="row"
        sx={{
          background: {
            xs: `linear-gradient(90deg, rgba(240,181,206,1) 0%, rgba(140,107,174,1) 100%)`,
            sm: `linear-gradient(151deg, rgba(240,181,206,1) 0%, rgba(140,107,174,1) 100%)`,
            md: `linear-gradient(22deg, rgba(240,181,206,1) 0%, rgba(140,107,174,1) 100%)`
          }
        }}
      >
        <LeftWeatherView />
        <RightWeatherView />
      </Grid>
    </Box>
  )
}

export default App
