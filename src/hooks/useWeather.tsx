import { useContext } from "react";
import GlobalContextProps from "../types/context";
import globalContext from "../context/globalContext";

export default function useWeather(): GlobalContextProps {
  const { weather, setWeather, loading, city, setCity, setTempType, tempType } =
    useContext<GlobalContextProps>(globalContext);

  return { weather, setWeather, loading, city, setCity, setTempType, tempType };
}
