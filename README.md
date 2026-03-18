# Roomora - Modern Room Rental Discovery Platform

A premium room rental discovery platform built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

![Roomora](https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200)

## ✨ Features

- 🏠 Beautiful landing page with hero section
- 🔍 Advanced filtering system (location, price, room type)
- 🧾 Responsive room listings grid
- 📄 Detailed room pages with image galleries
- ❤️ Favorites system with localStorage persistence
- 🌙 Dark mode support
- 🔎 Search with auto-suggestions
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 💫 Skeleton loaders and toast notifications

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd roomora

# Install dependencies
npm install

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
roomora/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── rooms/
│   │   ├── page.tsx       # Room listings
│   │   └── [id]/
│   │       └── page.tsx   # Room details
│   └── favorites/
│       └── page.tsx       # Favorites page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── RoomCard.tsx
│   ├── Filters.tsx
│   ├── SearchBar.tsx
│   └── ...
├── lib/                   # Utilities & mock data
│   ├── utils.ts
│   ├── mockData.ts
│   └── store.ts          # Zustand store
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- Primary: Emerald/Green tones
- Background: Clean whites with dark mode support
- Accents: Warm oranges and soft grays

### Typography
- Clean, modern sans-serif
- Clear hierarchy with proper spacing

### Components
- Rounded corners (2xl radius)
- Soft shadows
- Smooth transitions (300ms)
- Premium, Apple-inspired aesthetic

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔄 API Routes

The project uses static mock data, but is structured for easy backend integration:

- `GET /api/rooms` - Fetch all rooms
- `GET /api/rooms/[id]` - Fetch single room
- `GET /api/rooms?location=X&price=Y&type=Z` - Filter rooms

## 📦 Mock Data

The app includes 15-20 pre-configured rooms with:
- Realistic titles and descriptions
- Various locations (Dubai, Abu Dhabi, etc.)
- Price range: $500 - $3,000/month
- Ratings: 4.0 - 5.0 stars
- High-quality Unsplash images
- Complete amenity lists

## 🌙 Dark Mode

Toggle between light and dark themes with a single click. The theme preference is saved to localStorage.

## 💾 Data Persistence

- Favorites are stored in localStorage
- Theme preference is persisted
- All other data uses mock JSON

## 🔮 Future Enhancements

Ready for integration with:
- MongoDB
- Supabase
- PostgreSQL
- Real authentication
- Payment processing
- User reviews and ratings

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ by [Your Name]
