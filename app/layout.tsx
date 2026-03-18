import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Roomora - Find Your Perfect Room',
    template: '%s | Roomora',
  },
  description: 'Discover premium rooms for rent across the UAE. Roomora helps you find the perfect living space with advanced filtering, favorites, and a beautiful Apple-inspired design.',
  keywords: [
    'room rental',
    'apartments',
    'UAE',
    'Dubai',
    'Abu Dhabi',
    'housing',
    'rent',
    'room rental platform',
    'premium rooms',
    'studio apartment',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/logeshkannan19/Roomora',
    siteName: 'Roomora',
    title: 'Roomora - Find Your Perfect Room',
    description: 'Discover premium rooms for rent across the UAE',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
        width: 1200,
        height: 630,
        alt: 'Roomora - Premium Room Rental Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roomora - Find Your Perfect Room',
    description: 'Discover premium rooms for rent across the UAE',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200'],
  },
  robots: {
    index: true,
    follow: true,
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
