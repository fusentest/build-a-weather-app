
interface ForecastCardProps {
  data: {
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
  };
}

export default function ForecastCard({ data }: ForecastCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-200">
      <p className="font-semibold mb-3">{data.day}</p>
      <div className="text-5xl mb-3">{data.icon}</div>
      <div className="space-y-1">
        <p className="text-xl font-bold">{data.high}°</p>
        <p className="text-sm opacity-75">{data.low}°</p>
      </div>
    </div>
  );
}