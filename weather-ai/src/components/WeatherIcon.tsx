interface WeatherIconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
}

const iconMap: Record<string, string> = {
  '01d': '☀️', '01n': '🌙',
  '02d': '⛅', '02n': '☁️',
  '03d': '☁️', '03n': '☁️',
  '04d': '☁️', '04n': '☁️',
  '09d': '🌧️', '09n': '🌧️',
  '10d': '🌦️', '10n': '🌧️',
  '11d': '⛈️', '11n': '⛈️',
  '13d': '❄️', '13n': '❄️',
  '50d': '🌫️', '50n': '🌫️',
};

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-5xl',
  lg: 'text-8xl',
};

export default function WeatherIcon({ icon, size = 'md' }: WeatherIconProps) {
  return (
    <span className={`${sizeClasses[size]} animate-pulse-neon`}>
      {iconMap[icon] || '🌡️'}
    </span>
  );
}
