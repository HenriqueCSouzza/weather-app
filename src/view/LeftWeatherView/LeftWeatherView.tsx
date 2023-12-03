import { Box, Grid } from "@mui/material";
import LeftWeatherHeader from "./LeftWeatherHeader";
import LeftWeatherContent from "./LeftWeatherContent";
import useWeather from "../../hooks/useWeather";
export default function LeftWeatherView() {
  const { weather, tempType } = useWeather();

  return (
    <Grid item xs={12} sm={12} md={7}>
      <Box p={8}>
        <LeftWeatherHeader icon={weather?.weather[0].icon} />
        <LeftWeatherContent tempType={tempType} temp={weather?.main.temp} />
      </Box>
    </Grid>
  );
}
