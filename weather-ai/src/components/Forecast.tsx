import type { ForecastData } from '../types/weather';
import WeatherIcon from './WeatherIcon';

interface ForecastProps {
  data: ForecastData;
}

export default function Forecast({ data }: ForecastProps) {
  const dailyForecasts = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const formatDay = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="glass rounded-3xl p-6 neon-glow mt-6">
      <h3 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dailyForecasts.map((item, index) => (
          <div
            key={index}
            className="glass rounded-xl p-4 min-w-[100px] text-center shrink-0 hover:scale-105 transition-transform"
          >
            <p className="text-gray-400 text-sm">{formatDay(item.dt_txt)}</p>
            <WeatherIcon icon={item.weather[0].icon} size="sm" />
            <p className="text-white font-semibold">{Math.round(item.main.temp)}°</p>
            <p className="text-gray-500 text-xs">{item.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
