import { Theme, createTheme } from "@mui/material";
import typography from "./typography";
import palette from "./palette";
import MuiIconButton from "./overrides/IconButton"

const theme: Theme = createTheme({ palette, typography, components: { MuiIconButton } });

export default theme;
