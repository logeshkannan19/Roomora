# Roomora - Premium Room Rental Discovery Platform

![Roomora Banner](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200)

> A modern, production-ready room rental discovery platform with a premium Apple-inspired design.

## 🚀 Overview

Roomora is a sophisticated room rental platform designed for the UAE market. It features a clean, Apple-inspired UI with smooth animations, advanced filtering capabilities, and a delightful user experience. Built with modern web technologies and best practices.

**Live Demo**: [roomora.vercel.app](https://roomora.vercel.app)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Hero Landing** | Stunning hero section with animated search and statistics |
| 🔍 **Smart Filters** | Filter by location, price range, and room type |
| 📱 **Responsive Grid** | Beautiful card layout adapts to all screen sizes |
| 📄 **Room Details** | Full gallery, amenities, and booking actions |
| ❤️ **Favorites** | Save rooms locally with persistent storage |
| 🌙 **Dark Mode** | Eye-friendly dark theme with smooth transitions |
| 🔎 **Auto-Suggest** | Smart search with location suggestions |
| ⚡ **Animations** | Framer Motion powered smooth transitions |
| 💫 **Loading States** | Skeleton loaders for premium UX |

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **State** | Zustand |
| **Icons** | Lucide React |
| **Animation** | Framer Motion |
| **UI Components** | Radix UI |

## 📁 Project Structure

```
roomora/
├── app/                        # Next.js App Router
│   ├── api/rooms/[id]/        # API routes
│   ├── favorites/              # Favorites page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── Footer.tsx             # Footer
│   ├── RoomCard.tsx           # Room card component
│   ├── RoomListings.tsx       # Room grid with filters
│   ├── Filters.tsx            # Filter controls
│   ├── SearchBar.tsx          # Search with suggestions
│   ├── FeaturedRooms.tsx      # Featured listings
│   ├── FavoritesButton.tsx    # Heart/favorite toggle
│   └── ThemeProvider.tsx      # Theme context
├── lib/
│   ├── mockData.ts            # 18 premium room listings
│   ├── store.ts               # Zustand state management
│   └── utils.ts               # Utility functions
├── hooks/
│   └── useDebounce.ts        # Debounce hook
├── next.config.js             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/Roomora.git
cd Roomora

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file if needed:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#10B981` | CTAs, links, highlights |
| Primary Dark | `#059669` | Hover states |
| Background Light | `#FFFFFF` | Light mode background |
| Background Dark | `#020617` | Dark mode background |
| Text | `#0F172A` | Primary text |
| Muted | `#64748B` | Secondary text |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large size
- **Body**: Regular, optimized line height
- **Code**: JetBrains Mono

### Components

- **Cards**: Rounded-xl (16px radius), soft shadows
- **Buttons**: Rounded-xl, multiple variants
- **Inputs**: Clean, minimal borders
- **Transitions**: 300ms ease-out

## 📱 Responsive Design

| Breakpoint | Columns | Description |
|------------|---------|-------------|
| < 640px | 1 | Mobile phones |
| 640px+ | 2 | Tablets |
| 768px+ | 3 | Small laptops |
| 1024px+ | 3-4 | Desktops |
| 1280px+ | 4 | Large screens |

## 🔌 API Reference

The API routes are structured for easy backend integration:

### GET /api/rooms/[id]

Fetch a single room by ID.

**Response:**
```json
{
  "id": "1",
  "title": "Modern Marina Studio",
  "location": "Dubai Marina",
  "price": 2500,
  "rating": 4.9,
  "type": "Studio",
  "amenities": ["WiFi", "AC", "Pool"],
  "images": ["url1", "url2"],
  "description": "...",
  "availableNow": true
}
```

## 📦 Mock Data

The platform includes 18 premium room listings across:

- Dubai Marina, Downtown Dubai, Palm Jumeirah
- Abu Dhabi Corniche, Al Reem Island
- Sharjah, Ajman, Ras Al Khaimah, Fujairah
- DIFC, Business Bay, JBR, and more

## 🔮 Future Roadmap

- [ ] User authentication (NextAuth.js)
- [ ] Database integration (PostgreSQL/Supabase)
- [ ] Real-time chat with hosts
- [ ] Booking system with payments
- [ ] User reviews and ratings
- [ ] Push notifications
- [ ] PWA support
- [ ] Advanced analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for high-quality images
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com) for styling
