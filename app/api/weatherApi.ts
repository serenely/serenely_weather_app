import axios from 'axios' 

const apiKey = 'c087f675f14f5325d3c46d47de15b3a4'  
const apiUrl = `https://api.openweathermap.org/data/2.5/weather` 

interface WeatherResponse {
  cityTemperature: number | null
  cityName: string | null
}

export async function fetchCityWeather(lat: number, lon: number): Promise<WeatherResponse> {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        lat,
        lon,
        appid: apiKey,
      },
    }) 
    const weatherData = response.data 
    const cityTemperature = weatherData.main.temp 
    const cityName = weatherData.name  

    return {
      cityTemperature: temperatureCelsius(cityTemperature.toString()),
      cityName,
    } 
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
}

export function temperatureCelsius(cityTemperature: string): number {
  const kelvin = parseFloat(cityTemperature) 
  return kelvin - 273.15  
}
