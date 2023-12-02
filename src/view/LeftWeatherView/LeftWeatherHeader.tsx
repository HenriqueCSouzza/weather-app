import { Box } from "@mui/material";
import TemperatureSwitch from "../../components/TemperatureSwitch";
import WeatherImgs from "../../components/WeatherImgs";
import { Weather } from "../../types/openWeather";
type LeftWeatherHeaderProps = {
  icon?: Weather["icon"];
};

export default function LeftWeatherHeader({ icon }: LeftWeatherHeaderProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      minHeight="100px"
      mb={3}
    >
      <WeatherImgs icon={icon} />
      <TemperatureSwitch />
    </Box>
  );
}
