import type { WeatherData } from '../types/weather';

interface AIInsightProps {
  data: WeatherData;
}

export default function AIInsight({ data }: AIInsightProps) {
  const generateInsight = () => {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const weather = data.weather[0].main.toLowerCase();
    const windSpeed = data.wind.speed;

    const insights: string[] = [];

    // Temperature insights
    if (temp > 30) insights.push("🔥 It's quite hot! Stay hydrated and seek shade.");
    else if (temp > 20) insights.push("☀️ Pleasant weather for outdoor activities.");
    else if (temp > 10) insights.push("🧥 A light jacket would be comfortable.");
    else if (temp > 0) insights.push("🧣 Bundle up, it's chilly outside!");
    else insights.push("❄️ Freezing temperatures! Dress warmly in layers.");

    // Weather condition insights
    if (weather.includes('rain')) insights.push("☔ Don't forget your umbrella!");
    if (weather.includes('snow')) insights.push("🌨️ Roads may be slippery, drive carefully.");
    if (weather.includes('thunder')) insights.push("⚡ Stay indoors if possible during storms.");
    if (weather.includes('clear')) insights.push("✨ Great visibility for stargazing tonight!");

    // Humidity insights
    if (humidity > 80) insights.push("💦 High humidity - may feel warmer than actual temp.");
    else if (humidity < 30) insights.push("🏜️ Low humidity - keep moisturized!");

    // Wind insights
    if (windSpeed > 10) insights.push("🌬️ Strong winds - secure loose items outdoors.");

    return insights.slice(0, 3);
  };

  const insights = generateInsight();

  return (
    <div className="glass rounded-3xl p-6 neon-glow mt-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🤖</span>
        <h3 className="text-xl font-semibold text-white">AI Weather Insights</h3>
      </div>
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <p key={index} className="text-gray-300 bg-white/5 rounded-lg p-3">
            {insight}
          </p>
        ))}
      </div>
    </div>
  );
}
