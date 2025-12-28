import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import AIInsight from './components/AIInsight';
import { SkeletonCard, SkeletonForecast } from './components/Skeleton';
import { useWeather } from './hooks/useWeather';

export default function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text text-cyan-400 mb-2">
            Weather AI
          </h1>
          <p className="text-gray-400">Your intelligent weather companion</p>
        </header>

        <SearchBar onSearch={fetchWeather} isLoading={loading} />

        {error && (
          <div className="glass rounded-2xl p-4 text-center text-red-400 border border-red-500/30 mb-6">
            ⚠️ {error}
          </div>
        )}

        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonForecast />
          </>
        ) : weather && forecast ? (
          <>
            <WeatherCard data={weather} />
            <Forecast data={forecast} />
            <AIInsight data={weather} />
          </>
        ) : (
          <div className="glass rounded-3xl p-12 text-center neon-glow">
            <span className="text-6xl mb-4 block">🌤️</span>
            <p className="text-gray-400 text-lg">
              Search for a city to get started
            </p>
          </div>
        )}

        <footer className="text-center mt-8 text-gray-500 text-sm">
          Powered by OpenWeatherMap API
        </footer>
      </div>
    </div>
  );
}
