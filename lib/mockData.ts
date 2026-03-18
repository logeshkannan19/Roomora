export interface Room {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  type: 'Single' | 'Shared' | 'Studio';
  amenities: string[];
  images: string[];
  description: string;
  availableNow: boolean;
}

export const rooms: Room[] = [
  {
    id: '1',
    title: 'Modern Marina Studio with Sea View',
    location: 'Dubai Marina',
    price: 2500,
    rating: 4.9,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Pool', 'Gym', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Experience luxury living in this stunning studio apartment overlooking Dubai Marina. Wake up to breathtaking sea views and enjoy access to world-class amenities. The space features floor-to-ceiling windows, a modern kitchen, and elegant furnishings. Perfect for professionals seeking a premium lifestyle.',
    availableNow: true
  },
  {
    id: '2',
    title: 'Cozy Downtown Loft',
    location: 'Downtown Dubai',
    price: 3200,
    rating: 4.8,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Kitchen', 'Security', 'Balcony'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Live in the heart of the city with this contemporary loft-style room. Steps away from Burj Khalifa and The Dubai Mall. Features high ceilings, industrial-chic design, and stunning city views. The building offers 24/7 security and premium concierge services.',
    availableNow: false
  },
  {
    id: '3',
    title: 'Palm Jumeirah Beach Room',
    location: 'Palm Jumeirah',
    price: 4500,
    rating: 5.0,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Beach Access', 'Pool', 'Spa', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Wake up to pristine beach views in this exclusive room on the iconic Palm Jumeirah. Enjoy private beach access, infinity pool, and five-star hotel amenities. The room features a king-size bed, marble bathroom, and private balcony overlooking the Arabian Gulf.',
    availableNow: true
  },
  {
    id: '4',
    title: 'Cultural District Shared Space',
    location: 'Al Quoz',
    price: 850,
    rating: 4.5,
    type: 'Shared',
    amenities: ['WiFi', 'AC', 'Kitchen', 'Laundry', 'Workspace'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Join a vibrant creative community in this beautifully designed shared space. Located in Al Quoz, the city art and culture hub. Features dedicated workspaces, a communal kitchen, and regular community events. Perfect for digital nomads and young professionals.',
    availableNow: true
  },
  {
    id: '5',
    title: 'Luxury DIFC Executive Suite',
    location: 'DIFC',
    price: 5500,
    rating: 4.9,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Gym', 'Concierge', 'Parking', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Premium executive accommodation in the Dubai International Financial Centre. This sophisticated suite offers seamless access to financial institutions, upscale restaurants, and art galleries. Features premium finishes, smart home technology, and white-glove concierge service.',
    availableNow: false
  },
  {
    id: '6',
    title: 'Waterfront Family Room',
    location: 'Dubai Creek Harbour',
    price: 2800,
    rating: 4.7,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Pool', 'Kids Area', 'Parking', 'Balcony'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: "Spacious room with stunning creek and skyline views in the new Dubai Creek Harbour development. Perfect for families, featuring access to children's play areas, infinity pools, and nature trails. Just minutes from the upcoming Dubai Square shopping district.",
    availableNow: true
  },
  {
    id: '7',
    title: 'Business Bay Contemporary Room',
    location: 'Business Bay',
    price: 1950,
    rating: 4.6,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Gym', 'Restaurant', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Modern room in the bustling Business Bay area, perfect for professionals. Overlooks the Dubai Canal with easy access to Downtown Dubai. Features contemporary design, high-speed WiFi, and access to business center facilities. Walking distance to Metro.',
    availableNow: true
  },
  {
    id: '8',
    title: 'Heritage Area Traditional Room',
    location: 'Al Fahidi',
    price: 1200,
    rating: 4.8,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Traditional Design', 'Rooftop', 'Library'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Unique room in a beautifully restored wind-tower building in historic Al Fahidi. Experience traditional Emirati architecture with modern comforts. Features original architectural elements, a peaceful courtyard, and rooftop terrace with canal views. Immerse in Dubai rich heritage.',
    availableNow: false
  },
  {
    id: '9',
    title: 'Jumeirah Beach Residence',
    location: 'JBR',
    price: 3100,
    rating: 4.8,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Beach Access', 'Pool', 'Gym', 'Mall'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Beachfront studio in the popular Jumeirah Beach Residence. Step onto The Walk promenade with endless dining and entertainment options. Features a fully equipped kitchen, access to private beach, and stunning sea views from your balcony.',
    availableNow: true
  },
  {
    id: '10',
    title: 'Silicon Oasis Tech Hub Room',
    location: 'Silicon Oasis',
    price: 1400,
    rating: 4.5,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Tech Community', 'Gaming Zone', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Tech-savvy room in Dubai Silicon Oasis, perfect for developers and entrepreneurs. Join a community of innovators with co-working spaces, hackathon events, and networking sessions. Features ergonomic furniture, ultra-fast internet, and access to maker labs.',
    availableNow: true
  },
  {
    id: '11',
    title: 'Abu Dhabi Corniche Suite',
    location: 'Abu Dhabi Corniche',
    price: 3800,
    rating: 4.9,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Sea View', 'Pool', 'Gym', 'Concierge'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Elegant suite overlooking the stunning Abu Dhabi Corniche. Experience five-star living with panoramic Arabian Gulf views. Features marble finishes, designer furniture, and access to private beach. Walking distance to luxury shopping at The Galleria.',
    availableNow: false
  },
  {
    id: '12',
    title: 'Al Reem Island Modern Room',
    location: 'Al Reem Island',
    price: 1600,
    rating: 4.6,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Gym', 'Pool', 'Parking', 'Kids Play'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Contemporary room on Al Reem Island with stunning city skyline views. Family-friendly community with parks, schools, and shopping centers nearby. Features modern design, high ceilings, and access to resort-style amenities including pools and fitness center.',
    availableNow: true
  },
  {
    id: '13',
    title: 'Sharjah Art Foundation Room',
    location: 'Sharjah',
    price: 900,
    rating: 4.7,
    type: 'Shared',
    amenities: ['WiFi', 'AC', 'Art Community', 'Library', 'Garden'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Creative shared space in the heart of Sharjah cultural district. Perfect for artists, writers, and creatives seeking inspiration. Join a community that celebrates the arts with regular exhibitions, workshops, and cultural events. Features studio spaces and tranquil gardens.',
    availableNow: true
  },
  {
    id: '14',
    title: 'Ajman Seafront Studio',
    location: 'Ajman',
    price: 1100,
    rating: 4.4,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Sea View', 'Beach Access', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Affordable seafront studio in Ajman with beautiful Gulf views. Perfect for those seeking peaceful coastal living at an accessible price point. Features a fully equipped kitchen, comfortable furnishings, and direct beach access. Great for weekend getaways.',
    availableNow: true
  },
  {
    id: '15',
    title: 'Ras Al Khaimah Mountain View',
    location: 'Ras Al Khaimah',
    price: 1350,
    rating: 4.8,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Mountain View', 'Nature', 'Hiking', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Unique room with spectacular Hajar Mountains views in Ras Al Khaimah. Perfect for nature lovers and outdoor enthusiasts. Access to hiking trails, beaches, and the UAE highest peak. Features rustic-modern design with stone accents and large windows framing the mountain scenery.',
    availableNow: false
  },
  {
    id: '16',
    title: 'Fujairah Beach Retreat',
    location: 'Fujairah',
    price: 1250,
    rating: 4.6,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Beach Access', 'Diving', 'Snorkeling', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Beach lovers paradise in Fujairah on the east coast. Wake up to ocean waves in this cozy studio perfect for water sports enthusiasts. Features diving equipment storage, easy access to famous dive sites, and a rooftop terrace for sunset viewing.',
    availableNow: true
  },
  {
    id: '17',
    title: 'Dubai Hills Estate Premium',
    location: 'Dubai Hills Estate',
    price: 4200,
    rating: 4.9,
    type: 'Single',
    amenities: ['WiFi', 'AC', 'Golf View', 'Pool', 'Gym', 'Mall', 'Park'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Luxurious room in the prestigious Dubai Hills Estate with stunning golf course views. Part of a master-planned community featuring parks, shopping at Dubai Hills Mall, and proximity to the Dubai Hills Championship Golf Course. Elegant finishes and resort-style amenities.',
    availableNow: false
  },
  {
    id: '18',
    title: 'Bluewaters Island Residence',
    location: 'Bluewaters Island',
    price: 4800,
    rating: 5.0,
    type: 'Studio',
    amenities: ['WiFi', 'AC', 'Ain Dubai View', 'Pool', 'Beach', 'Retail'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    ],
    description: 'Ultra-premium residence on the iconic Bluewaters Island with unobstructed Ain Dubai views. Steps from the worlds largest observation wheel and Caesars Palace. Features luxury finishes, smart home technology, and access to private beach club and retail promenade.',
    availableNow: true
  }
];

export const locations = [
  'All Locations',
  'Dubai Marina',
  'Downtown Dubai',
  'Palm Jumeirah',
  'Al Quoz',
  'DIFC',
  'Dubai Creek Harbour',
  'Business Bay',
  'Al Fahidi',
  'JBR',
  'Silicon Oasis',
  'Abu Dhabi Corniche',
  'Al Reem Island',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Dubai Hills Estate',
  'Bluewaters Island'
];
