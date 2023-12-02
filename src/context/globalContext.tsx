import { createContext, useMemo, useState, useEffect } from "react";
import GlobalContextProps from "../types/context";
import OpenWeatherProps from "../types/openWeather";
import { openWeatherApi } from "../services/openWeatherMap";
import { useQuery } from "@tanstack/react-query";
import { openWeatherMock } from "../mock/weather";

const globalContext = createContext<GlobalContextProps>({
  loading: false,
  tempType: "celsius",
});

export default globalContext;

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<OpenWeatherProps>(openWeatherMock);
  const [city, setCity] = useState<string>("");
  const [tempType, setTempType] = useState<"celsius" | "fahrenheit">("celsius");
  const { data, isLoading: loading } = useQuery({
    queryKey: ["weather", city],
    queryFn: ({ queryKey }) => openWeatherApi({ city: queryKey[1] }),
    enabled: !!city,
  });

  useEffect(() => {
    if (data) {
      setWeather(data as OpenWeatherProps);
    }
  }, [data]);

  const valueMemo = useMemo<GlobalContextProps>(
    () => ({
      weather,
      setWeather,
      loading,
      city,
      setCity,
      tempType,
      setTempType,
    }),
    [weather, setWeather, loading, city, setCity, tempType, setTempType]
  );

  return (
    <globalContext.Provider value={valueMemo}>
      {children}
    </globalContext.Provider>
  );
}
