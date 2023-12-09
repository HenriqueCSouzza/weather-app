import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: "'ºF'",
        'aria-label': 'Fahrenheit',
        role: 'switch'
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#ffffff2e'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#ffffff2e',
    width: 32,
    height: 32,
    '&:before': {
      content: "'ºC'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 5,
      top: 5,
      'aria-label': 'Celsius',
      role: 'switch'
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#ffffff2e',
    borderRadius: 20 / 2
  }
}))

export default function TemperatureSwitch(props: SwitchProps) {
  return (
    <StyledSwitch
      {...props}
      aria-labelledby="temperature-switch-label"
      aria-label="Temperature Switch"
    />
  )
}
