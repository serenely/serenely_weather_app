import { fetchCityWeather } from '@/app/api/weatherApi';
import { CITIES_COORD_DATA, WeatherData } from '@/app/constants/constants';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface WeatherState {
  loading: boolean
  data: WeatherData[]
  error: string | null
}

const initialState: WeatherState = {
  loading: false,
  data: [],
  error: null,
}

export const fetchWeather = createAsyncThunk<WeatherData[]>('weatherApi/fetchWeather', async () => {
  const weatherDataArray = await Promise.all(CITIES_COORD_DATA.map(async (city) => {
    const { cityTemperature, cityName } = await fetchCityWeather(city.lat, city.lon);
    return { id: city.id, cityTemperature, cityName };
  }));

  if (weatherDataArray.some(weather => weather.cityTemperature === undefined)) {
    throw new Error('Failed to fetch some temperatures');
  }

  return weatherDataArray;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;