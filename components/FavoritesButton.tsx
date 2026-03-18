'use client';

import { Heart } from 'lucide-react';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function FavoritesButton({ roomId }: { roomId: string }) {
  const { isFavorite, addFavorite, removeFavorite } = useStore();
  const isFav = isFavorite(roomId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(roomId);
    } else {
      addFavorite(roomId);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
        isFav 
          ? 'bg-red-500/90 text-white hover:bg-red-600' 
          : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
      }`}
    >
      <Heart className="w-5 h-5" fill={isFav ? 'currentColor' : 'none'} />
    </motion.button>
  );
}
