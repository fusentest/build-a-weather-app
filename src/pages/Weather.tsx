
import { useState } from 'react';
import { Search, MapPin, Wind, Droplets, Eye, Gauge } from 'lucide-react';
import WeatherCard from '@/components/WeatherCard';
import ForecastCard from '@/components/ForecastCard';
import SearchBar from '@/components/SearchBar';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  icon: string;
}

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: 'San Francisco, CA',
    temperature: 72,
    condition: 'Partly Cloudy',
    high: 75,
    low: 62,
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    icon: '⛅'
  });

  const [forecast] = useState<ForecastDay[]>([
    { day: 'Mon', high: 75, low: 62, condition: 'Sunny', icon: '☀️' },
    { day: 'Tue', high: 73, low: 60, condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Wed', high: 70, low: 58, condition: 'Cloudy', icon: '☁️' },
    { day: 'Thu', high: 68, low: 56, condition: 'Rainy', icon: '🌧️' },
    { day: 'Fri', high: 71, low: 59, condition: 'Sunny', icon: '☀️' },
  ]);

  const handleSearch = (location: string) => {
    console.log('Searching for:', location);
    // API integration will be added in next phase
  };

  return (
    <div className="min-h-screen sky-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Weather Now
          </h1>
          <p className="text-white/90 text-lg">Your personal weather companion</p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Main Weather Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <WeatherCard data={weatherData} />
        </div>

        {/* Weather Details Grid */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="w-5 h-5" />
                <span className="text-sm opacity-90">Wind</span>
              </div>
              <p className="text-2xl font-bold">{weatherData.windSpeed} mph</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5" />
                <span className="text-sm opacity-90">Humidity</span>
              </div>
              <p className="text-2xl font-bold">{weatherData.humidity}%</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5" />
                <span className="text-sm opacity-90">Visibility</span>
              </div>
              <p className="text-2xl font-bold">{weatherData.visibility} mi</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-5 h-5" />
                <span className="text-sm opacity-90">Pressure</span>
              </div>
              <p className="text-2xl font-bold">{weatherData.pressure} mb</p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            5-Day Forecast
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <ForecastCard key={index} data={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}