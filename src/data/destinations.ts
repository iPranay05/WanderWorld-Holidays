export interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  region: 'north' | 'south' | 'east' | 'west';
  experience: 'culture' | 'adventure' | 'nature';
  location: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Rajasthan',
    image: '/Rajasthan.jpg',
    rating: 4.8,
    price: '₹15,999',
    region: 'north',
    experience: 'culture',
    location: 'Northwestern India',
    description: 'Experience the royal heritage of India with magnificent palaces, ancient forts, and vibrant culture in the land of kings.'
  },
  
  {
    id: 2,
    name: 'Kerala',
    image: '/Kerala.jpg',
    rating: 4.9,
    price: '₹18,499',
    region: 'south',
    experience: 'nature',
    location: 'Southwestern India',
    description: 'Discover the serene backwaters, lush green landscapes, and pristine beaches in God\'s Own Country.'
  },
  {
    id: 3,
    name: 'Goa',
    image: '/Goa.jpg',
    rating: 4.7,
    price: '₹12,999',
    region: 'west',
    experience: 'adventure',
    location: 'Western Coast of India',
    description: 'Enjoy the perfect blend of sun, sand, and sea along with vibrant nightlife and Portuguese-influenced architecture.'
  },
  {
    id: 4,
    name: 'Himachal Pradesh',
    image: '/HimachalPradesh.jpg',
    rating: 4.8,
    price: '₹16,499',
    region: 'north',
    experience: 'adventure',
    location: 'Northern India',
    description: 'Explore the breathtaking Himalayan landscapes, snow-capped mountains, and charming hill stations.'
  },
  {
    id: 5,
    name: 'Varanasi',
    image: '/Varanasi.jpg',
    rating: 4.6,
    price: '₹13,999',
    region: 'east',
    experience: 'culture',
    location: 'Uttar Pradesh, North India',
    description: 'Immerse yourself in one of the world\'s oldest living cities with its spiritual ghats, ancient temples, and rich cultural heritage.'
  },
  {
    id: 6,
    name: 'Andaman Islands',
    image: '/Andaman.jpg',
    rating: 4.9,
    price: '₹24,999',
    region: 'east',
    experience: 'nature',
    location: 'Bay of Bengal',
    description: 'Discover paradise on earth with crystal clear waters, pristine beaches, and incredible marine life perfect for diving enthusiasts.'
  }
];
