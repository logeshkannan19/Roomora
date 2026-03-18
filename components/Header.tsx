'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Building2, Heart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { favorites } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('roomora-theme', newTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Roomora</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/rooms" className="text-sm font-medium hover:text-primary transition-colors">
              Browse Rooms
            </Link>
            <Link href="/rooms?type=Studio" className="text-sm font-medium hover:text-primary transition-colors">
              Studios
            </Link>
            <Link href="/rooms?location=Dubai Marina" className="text-sm font-medium hover:text-primary transition-colors">
              Dubai Marina
            </Link>
            <Link href="/rooms?location=Palm Jumeirah" className="text-sm font-medium hover:text-primary transition-colors">
              Palm Jumeirah
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/favorites" className="relative">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <Sun className={cn('w-5 h-5', theme === 'dark' ? 'hidden' : 'block')} />
                <Moon className={cn('w-5 h-5', theme === 'dark' ? 'block' : 'hidden')} />
              </Button>
            )}

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link href="/rooms" className="text-sm font-medium py-2 hover:text-primary">
                Browse Rooms
              </Link>
              <Link href="/rooms?type=Studio" className="text-sm font-medium py-2 hover:text-primary">
                Studios
              </Link>
              <Link href="/rooms?location=Dubai Marina" className="text-sm font-medium py-2 hover:text-primary">
                Dubai Marina
              </Link>
              <Link href="/rooms?location=Palm Jumeirah" className="text-sm font-medium py-2 hover:text-primary">
                Palm Jumeirah
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
