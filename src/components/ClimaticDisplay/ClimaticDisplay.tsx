import { Box, Grid, Typography } from "@mui/material";
import DrizzleSVG from "../../assets/drizzle-icon.svg";
import HumiditySVG from "../../assets/hum-icon.svg";
import WindSVG from "../../assets/wind-direction-icon.svg";

const WindLabel = ({ wind }: { wind: number }) => (
  <Box
    display="flex"
    sx={{ borderRight: { md: "1px solid white" }, paddingRight: 3 }}
    gap={"21px"}
  >
    <img src={WindSVG} />
    <Typography>Wind</Typography>
    <Typography>{wind} km/h</Typography>
  </Box>
);
const HumLabel = ({ humidity }: { humidity: number }) => (
  <Box
    display="flex"
    sx={{ borderRight: { md: "1px solid white" }, paddingRight: 3 }}
    gap={"21px"}
  >
    <img src={HumiditySVG} />
    <Typography>Hum</Typography>
    <Typography>{humidity} %</Typography>
  </Box>
);
const DrizzleLabel = ({ drizzle }: { drizzle: number }) => (
  <Box display="flex" gap={"21px"}>
    <img src={DrizzleSVG} />
    <Typography>Rain</Typography>
    <Typography>{drizzle} %</Typography>
  </Box>
);

export default function ClimaticDisplay() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        filter:
          "drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))",
        ".MuiTypography-body1": {
          fontSize: "22px",
          fontFamily: "Overpass",
          lineHeight: 1,
          color: "#fff",
          fontWeight: 300,
        },
      }}
    >
      <Grid
        container
        spacing="21px"
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
      >
        <Grid item>
          <WindLabel wind={10} />
        </Grid>
        <Grid item>
          <HumLabel humidity={54} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DrizzleLabel drizzle={0.2} />
        </Grid>
      </Grid>
    </Box>
  );
}
