
import { MapPin } from 'lucide-react';

interface WeatherCardProps {
  data: {
    location: string;
    temperature: number;
    condition: string;
    high: number;
    low: number;
    icon: string;
  };
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="glass-effect rounded-3xl p-8 text-white shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">{data.location}</h2>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-7xl font-bold mb-2">
            {data.temperature}°
          </div>
          <p className="text-xl opacity-90 mb-4">{data.condition}</p>
          <div className="flex gap-4 text-lg">
            <span>H: {data.high}°</span>
            <span>L: {data.low}°</span>
          </div>
        </div>
        
        <div className="text-8xl">
          {data.icon}
        </div>
      </div>
    </div>
  );
}