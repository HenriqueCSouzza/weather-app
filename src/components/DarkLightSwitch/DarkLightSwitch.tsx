import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { sxContainer } from './sxDarkLightSwitch'

const DarkLightSwitch = styled(Switch)(({ theme }) => sxContainer(theme))

export default DarkLightSwitch
