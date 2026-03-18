'use client';

import { Search } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { locations } from '@/lib/mockData';
import { useDebounce } from '@/hooks/useDebounce';

export { SearchBar };
export default function SearchBar({ 
  variant = 'default',
  className = '' 
}: { 
  variant?: 'default' | 'hero';
  className?: string;
}) {
  const { filters, setFilters } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(filters.searchQuery, 300);

  useEffect(() => {
    if (debouncedQuery === '') {
      setSuggestions([]);
      return;
    }
    
    const filtered = locations.filter(loc =>
      loc.toLowerCase().includes(debouncedQuery.toLowerCase())
    ).slice(0, 5);
    
    setSuggestions(filtered);
  }, [debouncedQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      <div className={`flex items-center gap-3 ${
        variant === 'hero' 
          ? 'bg-white dark:bg-slate-800 rounded-2xl shadow-lg px-6 py-4 w-full max-w-2xl' 
          : 'bg-secondary rounded-xl px-4 py-2.5'
      }`}>
        <Search className={`${variant === 'hero' ? 'w-6 h-6' : 'w-5 h-5'} text-muted-foreground shrink-0`} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by location, title..."
          value={filters.searchQuery}
          onChange={(e) => setFilters({ searchQuery: e.target.value })}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className={`bg-transparent outline-none w-full placeholder:text-muted-foreground ${
            variant === 'hero' ? 'text-lg' : 'text-sm'
          }`}
        />
      </div>
      
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-xl shadow-lg overflow-hidden z-50"
          >
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setFilters({ searchQuery: suggestion });
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4 text-muted-foreground" />
                <span>{suggestion}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
