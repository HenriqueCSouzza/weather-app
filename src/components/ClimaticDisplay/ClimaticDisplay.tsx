import { Box, Grid, Typography } from '@mui/material'
import DrizzleSVG from './icons/drizzle-icon.svg'
import HumiditySVG from './icons/hum-icon.svg'
import WindSVG from './icons/wind-direction-icon.svg'
import { sxContainer } from './sxClimaticDisplay'

const WindLabel = ({ wind }: { wind?: number }) => (
  <Box
    display="flex"
    sx={{ borderRight: { md: '1px solid white' }, paddingRight: 3 }}
    gap="21px"
  >
    <img src={WindSVG} alt="wind image" />
    <Typography>Wind</Typography>
    <Typography>{wind} km/h</Typography>
  </Box>
)
const HumLabel = ({ humidity }: { humidity?: number }) => (
  <Box
    display="flex"
    sx={{ borderRight: { md: '1px solid white' }, paddingRight: 3 }}
    gap="21px"
  >
    <img src={HumiditySVG} alt="humidity image" />
    <Typography>Hum</Typography>
    <Typography>{humidity} %</Typography>
  </Box>
)
const DrizzleLabel = ({ drizzle }: { drizzle?: number }) => (
  <Box display="flex" gap="21px">
    <img src={DrizzleSVG} alt="drizzle image" />
    <Typography>Rain</Typography>
    <Typography>{drizzle} %</Typography>
  </Box>
)

export default function ClimaticDisplay({
  wind,
  humidity,
  drizzle
}: {
  wind?: number
  humidity?: number
  drizzle?: number
}) {
  return (
    <Box sx={sxContainer}>
      <Grid container spacing="21px" display="flex" flexDirection="row">
        <Grid item xs={12} sm={12} md={4}>
          <WindLabel wind={wind || 0} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <HumLabel humidity={humidity || 0} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DrizzleLabel drizzle={drizzle || 0} />
        </Grid>
      </Grid>
    </Box>
  )
}
