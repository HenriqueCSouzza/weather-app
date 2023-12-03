import OpenWeatherProps from "./openWeather";

type GlobalContextProps = {
  weather?: OpenWeatherProps;
  setWeather?: React.Dispatch<React.SetStateAction<OpenWeatherProps>>;
  loading: boolean;
  city?: string;
  setCity?: React.Dispatch<React.SetStateAction<string>>;
  tempType: "celsius" | "fahrenheit";
  setTempType: React.Dispatch<React.SetStateAction<"celsius" | "fahrenheit">>;
};

export default GlobalContextProps;
