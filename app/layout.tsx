import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roomora - Find Your Perfect Room',
  description: 'Discover premium rooms for rent in the UAE. Roomora helps you find the perfect living space with advanced filtering, favorites, and a beautiful Apple-inspired design.',
  keywords: ['room rental', 'apartments', 'UAE', 'Dubai', 'Abu Dhabi', 'housing', 'rent'],
  openGraph: {
    title: 'Roomora - Find Your Perfect Room',
    description: 'Discover premium rooms for rent in the UAE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
