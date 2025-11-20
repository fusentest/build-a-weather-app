
import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="glass-effect rounded-full overflow-hidden shadow-lg">
        <div className="flex items-center px-6 py-4">
          <Search className="w-5 h-5 text-white mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city..."
            className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-lg"
          />
        </div>
      </div>
    </form>
  );
}