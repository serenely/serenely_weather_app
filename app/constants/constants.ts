export interface WeatherData {
    id: number;
    cityTemperature: number | null;
    cityName: string | null;
  }

export const CITIES_COORD_DATA = [
    { id:1, lat: 46.48, lon: 30.71 },
    { id:2, lat: 43.21, lon: 27.91 },
    { id:3, lat: 44.42, lon: 26.10 },
    { id:4, lat: 42.69, lon: 23.32 },
    { id:5, lat: 44.15, lon: 28.63 },
  ]