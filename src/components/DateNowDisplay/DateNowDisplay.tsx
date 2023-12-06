import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

const DateComponent: React.FC<{ date: Date }> = ({ date }) => {
  const formattedDate = format(date, "do MMM ''yy")
  return (
    <Box
      sx={{
        filter:
          'drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))',
        '.MuiTypography-body1': {
          fontSize: '36px',
          lineHeight: 1,
          color: '#fff',
          fontWeight: 300
        }
      }}
    >
      <Typography variant="body1">{formattedDate}</Typography>
    </Box>
  )
}

const TimeComponent: React.FC<{ date: Date }> = ({ date }) => {
  const formattedTime = format(date, 'EEEE h:mm a')
  return (
    <Box
      sx={{
        filter:
          'drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))',
        '.MuiTypography-body1': {
          fontSize: '24px',
          lineHeight: 1.2,
          color: '#fff',
          fontWeight: 300
        }
      }}
    >
      <Typography variant="body1">{formattedTime}</Typography>
    </Box>
  )
}
export default function DateNowDisplay() {
  const date = new Date()

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <DateComponent date={date} />
      <TimeComponent date={date} />
    </Box>
  )
}
