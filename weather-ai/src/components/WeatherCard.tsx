import type { WeatherData } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import StatCard from './StatCard';

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="glass rounded-3xl p-8 neon-glow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-gray-400 capitalize">{data.weather[0].description}</p>
        </div>
        <div className="flex items-center gap-4">
          <WeatherIcon icon={data.weather[0].icon} size="lg" />
          <div>
            <p className="text-6xl md:text-7xl font-bold neon-text text-cyan-400">
              {Math.round(data.main.temp)}°
            </p>
            <p className="text-gray-400">
              Feels like {Math.round(data.main.feels_like)}°
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <StatCard icon="💧" label="Humidity" value={`${data.main.humidity}%`} />
        <StatCard icon="💨" label="Wind" value={`${data.wind.speed} m/s`} />
        <StatCard icon="🌡️" label="Pressure" value={`${data.main.pressure} hPa`} />
        <StatCard icon="👁️" label="Visibility" value={`${(data.visibility / 1000).toFixed(1)} km`} />
      </div>

      <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
        <span>🌅 Sunrise: {formatTime(data.sys.sunrise)}</span>
        <span>🌇 Sunset: {formatTime(data.sys.sunset)}</span>
        <span>🌡️ H: {Math.round(data.main.temp_max)}° L: {Math.round(data.main.temp_min)}°</span>
      </div>
    </div>
  );
}
