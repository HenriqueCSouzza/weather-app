import { Box, Grid } from "@mui/material";

export default function RightWeatherView() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={5}
      sx={{
        background:
          "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        boxShadow: "-5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset",
        backdropFilter: "blur(21px)",
      }}
    >
      <Box px={4} pt={4}>
        RightWeatherView
      </Box>
    </Grid>
  );
}
