'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/lib/mockData';
import FavoritesButton from './FavoritesButton';
import { motion } from 'framer-motion';

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
            <Image
              src={room.images[0]}
              alt={room.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FavoritesButton roomId={room.id} />
            
            {room.availableNow && (
              <Badge className="absolute bottom-4 left-4 bg-emerald-500/90 text-white hover:bg-emerald-600 backdrop-blur-sm">
                Available Now
              </Badge>
            )}
            
            <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white backdrop-blur-sm">
              {room.type}
            </Badge>
          </div>
          
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                {room.title}
              </h3>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{room.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{room.location}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t">
              <p className="text-2xl font-bold text-primary">
                ${room.price}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
              <div className="flex gap-1.5">
                {room.amenities.slice(0, 3).map((amenity) => (
                  <span key={amenity} className="text-xs bg-secondary px-2 py-1 rounded-md">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
