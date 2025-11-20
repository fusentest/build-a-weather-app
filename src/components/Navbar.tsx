
import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <Cloud className="w-8 h-8" />
            <span className="text-xl font-bold">Weather Now</span>
          </Link>

          {/* Sign In Button */}
          <Link to="/signin">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}