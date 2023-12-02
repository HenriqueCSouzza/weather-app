import axios from "axios";

type OpenWeatherLatLong = { lat: number; long: number };
type OpenWeatherCity = { city: string };

export function openWeatherApi({
  city,
}: OpenWeatherCity): Promise<unknown> | null {
  const encodeURL = encodeURI(
    import.meta.env.VITE_OPEN_WEATHER_API_URL +
      `?q=${city}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
  );

  if (!city) {
    return null;
  }

  return axios.get(encodeURL).then(({ data }) => {
    return data;
  });
}

export function openWeatherLatLongApi({
  lat,
  long,
}: OpenWeatherLatLong): Promise<unknown> {
  const encodeURL = encodeURI(
    process.env.VITE_OPEN_WEATHER_API_URL +
      `?lat=${lat}&lon=${long}&appid=${process.env.VITE_OPEN_WEATHER_API_KEY}`
  );
  return axios.get(encodeURL).then(({ data }) => {
    console.log("data", data);
    return data;
  });
}
