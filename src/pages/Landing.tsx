
import { Link } from 'react-router-dom';
import { Cloud, MapPin, Calendar, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Landing() {
  const features = [
    {
      icon: MapPin,
      title: 'Location-Based Forecasts',
      description: 'Get accurate weather data for any location worldwide with real-time updates.'
    },
    {
      icon: Calendar,
      title: '7-Day Forecast',
      description: 'Plan ahead with detailed weekly forecasts including temperature and conditions.'
    },
    {
      icon: TrendingUp,
      title: 'Weather Trends',
      description: 'Track weather patterns and trends to make informed decisions.'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Interface',
      description: 'Enjoy a stunning, intuitive design that makes checking weather delightful.'
    }
  ];

  return (
    <div className="min-h-screen sky-gradient">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
            <Cloud className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Your Personal Weather Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Weather Forecasts
            <br />
            Made Beautiful
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get accurate, real-time weather updates with a stunning interface. 
            Plan your day with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/weather">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg h-14 px-8 shadow-xl"
              >
                Check Weather Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold text-lg h-14 px-8 backdrop-blur-sm"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Everything You Need
            </h2>
            <p className="text-xl text-white/90">
              Powerful features wrapped in a beautiful package
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="glass-effect border-white/20 p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Weather Now for their daily forecasts
            </p>
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg h-14 px-8 shadow-xl"
              >
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}