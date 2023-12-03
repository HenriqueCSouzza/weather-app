import { Box } from "@mui/material";
import CustomCarousel from "./Carousel/Carousel";

type Item = { icon: "01d" | "02d" | "03d" | "04d" | "09d" | "10d" | "11d" | "13d" | "50d" | "01n" | "02n" | "03n" | "04n" | "09n" | "10n" | "11n" | "13n" | "50n", temperature: number, day: string }

const items: Item[] = [{
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
},
{
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
},
{
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
}, {
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
}, {
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
}, {
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
}, {
  temperature: 302.84,
  icon: "10n",
  day: "Thu"
}
]
export default function ForecastWeather({ tempType }: { tempType: "celsius" | "fahrenheit" }) {
  return (
    <Box display="flex" gap={9}>
      <CustomCarousel items={items} itemsToShow={3} tempType={tempType} />
    </Box>
  );
}
