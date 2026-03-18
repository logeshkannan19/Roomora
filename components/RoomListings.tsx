'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Room } from '@/lib/mockData';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from '@/components/SearchBar';
import { useState, useEffect } from 'react';

export function RoomListings({ showFilters = false }: { showFilters?: boolean }) {
  const [isLoading, setIsLoading] = useState(true);
  const { filters, setFilters, resetFilters } = useStore();
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-10 w-48 bg-muted animate-pulse rounded-lg" />
          <div className="h-10 w-32 bg-muted animate-pulse rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-muted animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
                <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
                <div className="h-8 bg-muted animate-pulse rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Rooms</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Reset filters
        </button>
      </div>
      
      {showFilters && (
        <Card className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar variant="default" />
            </div>
          </div>
        </Card>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(filters)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CardSkeleton />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-card">
      <div className="aspect-[4/3] bg-muted animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
        <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-muted animate-pulse rounded" />
          <div className="h-6 w-16 bg-muted animate-pulse rounded" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-8 w-20 bg-muted animate-pulse rounded" />
          <div className="flex gap-1">
            <div className="h-6 w-12 bg-muted animate-pulse rounded" />
            <div className="h-6 w-12 bg-muted animate-pulse rounded" />
            <div className="h-6 w-12 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
