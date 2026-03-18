'use client';

import { Heart, AlertCircle } from 'lucide-react';
import { useStore } from '@/lib/store';
import { getFavoriteRooms } from '@/lib/store';
import { rooms } from '@/lib/mockData';
import RoomCard from '@/components/RoomCard';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

export default function FavoritesPage() {
  const { favorites } = useStore();
  const favoriteRooms = getFavoriteRooms(rooms, favorites);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-3">Your Favorites</h1>
          <p className="text-muted-foreground text-lg">
            {favoriteRooms.length} {favoriteRooms.length === 1 ? 'room' : 'rooms'} saved
          </p>
        </motion.div>

        {favoriteRooms.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-muted-foreground text-center max-w-md">
              Start exploring and save rooms you love by clicking the heart icon.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>
        )}
      </main>
      
      <Toaster />
    </div>
  );
}
