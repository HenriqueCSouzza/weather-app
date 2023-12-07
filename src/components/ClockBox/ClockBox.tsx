import { Box, Typography } from '@mui/material'
import Clock from '../Clock'
export default function ClockBox({
  title,
  hourBegin,
  hourEnd,
  dt
}: {
  title: string
  hourBegin?: string
  hourEnd?: string
  dt: Date
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          color: '#fff',
          textAlign: 'center',
          textShadow: '-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.10)',
          '.MuiTypography-body1': {
            fontSize: '28px'
          }
        }}
        mb={4}
      >
        <Typography>{title}</Typography>
      </Box>
      <Box
        sx={{
          borderRadius: '100px',
          background: 'rgba(255, 255, 255, 0.26)',
          width: 150,
          height: 300
        }}
      >
        <Clock dt={dt} />
        <Box
          sx={{
            textAlign: 'center',
            color: '#fff',
            '.MuiTypography-body1': {
              fontSize: '28px'
            },
            '.MuiTypography-body2': {
              fontSize: '22px'
            }
          }}
        >
          <Typography variant="body1">
            {hourBegin?.replace(/:\d{2}\s/, ' ')}
          </Typography>
          <Typography variant="body2">
            {hourEnd?.replace(/:\d{2}\s/, ' ')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
