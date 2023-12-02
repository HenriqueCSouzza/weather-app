import { Box } from "@mui/material";
import BoxWeather from "./BoxWeather";

export default function ForecastWeather() {
  return (
    <Box display="flex" gap={9}>
      <BoxWeather
        temperature={302.84}
        tempType="celsius"
        icon="10n"
        day="Thu"
      />
      <BoxWeather
        temperature={302.84}
        tempType="celsius"
        icon="10n"
        day="Thu"
      />
      <BoxWeather
        temperature={302.84}
        tempType="celsius"
        icon="10n"
        day="Thu"
      />
      <BoxWeather
        temperature={302.84}
        tempType="celsius"
        icon="10n"
        day="Thu"
      />
    </Box>
  );
}
