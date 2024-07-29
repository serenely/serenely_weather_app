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

export interface SUN_POSITION_DATA {
    id: number,
    time: string | null,
    title: string | null,
    emoji: string | null,
}

  export const SUN_POSITION_DATA = [
    { id: 1, time: '00:30', title: '25°', emoji: '☀️' },
    { id: 2, time: '03:30', title: '23°', emoji: '🌧️' },
    { id: 3, time: '06:30', title: '27°', emoji: '⛅' },
    { id: 4, time: '09:30', title: '30°', emoji: '🌩️' },
    { id: 5, time: '12:30', title: '31°', emoji: '🌧️' },
    { id: 6, time: '15:30', title: '33°', emoji: '☀️' },
    { id: 7, time: '18:30', title: '32°', emoji: '⛅' },
    { id: 8, time: '21:30', title: '29°', emoji: '❄️' },
  ]