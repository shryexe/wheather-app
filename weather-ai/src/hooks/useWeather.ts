import { useState, useCallback } from 'react';
import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`),
        fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`),
      ]);

      if (!weatherRes.ok) {
        throw new Error(weatherRes.status === 404 ? 'City not found' : 'Failed to fetch weather');
      }

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, forecast, loading, error, fetchWeather };
}
