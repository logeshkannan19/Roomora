'use client';

import { Slider } from '@/components/ui/slider';
import { useStore } from '@/lib/store';
import { locations } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Home } from 'lucide-react';

export default function Filters() {
  const { filters, setFilters, resetFilters } = useStore();

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-primary" />
            <label className="text-sm font-medium">Location</label>
          </div>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ location: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc === 'All Locations' ? 'all' : loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-4 h-4 text-primary" />
            <label className="text-sm font-medium">Price Range</label>
          </div>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters({ priceRange: value as [number, number] })}
            min={0}
            max={6000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Home className="w-4 h-4 text-primary" />
            <label className="text-sm font-medium">Room Type</label>
          </div>
          <div className="flex flex-wrap gap-2">
            {['all', 'Single', 'Shared', 'Studio'].map((type) => (
              <button
                key={type}
                onClick={() => setFilters({ roomType: type })}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  filters.roomType === type
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-secondary'
                }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          onClick={resetFilters}
          className="w-full"
        >
          Reset Filters
        </Button>
      </div>
    </Card>
  );
}
