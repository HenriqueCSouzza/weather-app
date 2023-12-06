import { Theme, createTheme } from '@mui/material'
import typography from './typography'
import palette from './palette'
import MuiIconButton from './overrides/IconButton'
import MuiSvgIcon from './overrides/MuiSvgIcon'
import MuiInputBase from './overrides/MuiInputBase'

const theme: Theme = createTheme({
  palette,
  typography,
  components: { MuiIconButton, MuiSvgIcon, MuiInputBase }
})

export default theme
