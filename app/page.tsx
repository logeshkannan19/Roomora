import { Suspense } from 'react';
import FeaturedRooms from '@/components/FeaturedRooms';
import Hero from '@/components/Hero';
import { RoomListings } from '@/components/RoomListings';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedRooms />
      
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="text-center">Loading rooms...</div>}>
            <RoomListings showFilters={true} />
          </Suspense>
        </div>
      </section>
      
      <Toaster />
    </main>
  );
}
