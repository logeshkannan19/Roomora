import { create } from 'zustand';
import { Room } from './mockData';

interface Filters {
  location: string;
  priceRange: [number, number];
  roomType: string;
  searchQuery: string;
}

interface Store {
  favorites: string[];
  filters: Filters;
  theme: 'light' | 'dark';
  addFavorite: (roomId: string) => void;
  removeFavorite: (roomId: string) => void;
  isFavorite: (roomId: string) => boolean;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
  toggleTheme: () => void;
}

const defaultFilters: Filters = {
  location: 'all',
  priceRange: [0, 5000],
  roomType: 'all',
  searchQuery: '',
};

export const useStore = create<Store>((set, get) => ({
  favorites: typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('roomora-favorites') || '[]') 
    : [],
  filters: defaultFilters,
  theme: typeof window !== 'undefined'
    ? (localStorage.getItem('roomora-theme') as 'light' | 'dark') || 'light'
    : 'light',

  addFavorite: (roomId: string) => {
    const newFavorites = [...get().favorites, roomId];
    localStorage.setItem('roomora-favorites', JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  removeFavorite: (roomId: string) => {
    const newFavorites = get().favorites.filter(id => id !== roomId);
    localStorage.setItem('roomora-favorites', JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  isFavorite: (roomId: string) => {
    return get().favorites.includes(roomId);
  },

  setFilters: (newFilters: Partial<Filters>) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters }
    }));
  },

  resetFilters: () => {
    set({ filters: defaultFilters });
  },

  toggleTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('roomora-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    set({ theme: newTheme });
  },
}));

export const filterRooms = (rooms: Room[], filters: Filters): Room[] => {
  return rooms.filter(room => {
    const matchesLocation = filters.location === 'all' || room.location === filters.location;
    const matchesPrice = room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1];
    const matchesType = filters.roomType === 'all' || room.type === filters.roomType;
    const matchesSearch = filters.searchQuery === '' || 
      room.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    return matchesLocation && matchesPrice && matchesType && matchesSearch;
  });
};

export const getFavoriteRooms = (rooms: Room[], favoriteIds: string[]): Room[] => {
  return rooms.filter(room => favoriteIds.includes(room.id));
};
