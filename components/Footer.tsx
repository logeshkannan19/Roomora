import { Heart, Building2, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { rooms } from '@/lib/mockData';
import { motion } from 'framer-motion';

const featuredRooms = rooms.filter(r => r.availableNow).slice(0, 3);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Roomora</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Discover your perfect space. Premium room rental platform with curated listings across the UAE.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/rooms" className="hover:text-white transition-colors">Browse Rooms</Link></li>
              <li><Link href="/rooms?type=Studio" className="hover:text-white transition-colors">Studios</Link></li>
              <li><Link href="/rooms?type=Single" className="hover:text-white transition-colors">Single Rooms</Link></li>
              <li><Link href="/rooms?type=Shared" className="hover:text-white transition-colors">Shared Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/rooms?location=Dubai Marina" className="hover:text-white transition-colors">Dubai Marina</Link></li>
              <li><Link href="/rooms?location=Downtown Dubai" className="hover:text-white transition-colors">Downtown Dubai</Link></li>
              <li><Link href="/rooms?location=Palm Jumeirah" className="hover:text-white transition-colors">Palm Jumeirah</Link></li>
              <li><Link href="/rooms?location=Abu Dhabi Corniche" className="hover:text-white transition-colors">Abu Dhabi Corniche</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>info@roomora.com</li>
              <li>+971 4 123 4567</li>
              <li>Dubai, UAE</li>
            </ul>
            <div className="flex gap-4 mt-4">
              {['twitter', 'facebook', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>© 2024 Roomora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
