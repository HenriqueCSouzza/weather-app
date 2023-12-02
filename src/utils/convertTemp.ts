export const convertSignal = {
  celsius: "°C",
  fahrenheit: "°F",
};

export function kelvinToCelsius(kelvin: number): number {
  return Math.floor(kelvin - 273.15);
}

export function kelvinToFahrenheit(kelvin: number): number {
  return Math.floor((kelvin - 273.15) * (9 / 5) + 32);
}

export const convertTemp = {
  celsius: (kelvin: number) => kelvinToCelsius(kelvin),
  fahrenheit: (kelvin: number) => kelvinToFahrenheit(kelvin),
};
