'use client';

import { Star, Sparkles } from 'lucide-react';
import RoomCard from '@/components/RoomCard';
import { rooms } from '@/lib/mockData';
import { motion } from 'framer-motion';

const featuredRooms = rooms.slice(0, 6);

export default function FeaturedRooms() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Featured Rooms</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
