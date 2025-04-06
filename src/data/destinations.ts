export interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  region: 'north' | 'south' | 'east' | 'west';
  experience: 'culture' | 'adventure' | 'nature';
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Rajasthan',
    image: '/Rajasthan.jpg',
    rating: 4.8,
    price: '₹15,999',
    region: 'north',
    experience: 'culture'
  },
  
  {
    id: 2,
    name: 'Kerala',
    image: '/Kerala.jpg',
    rating: 4.9,
    price: '₹18,499',
    region: 'south',
    experience: 'nature'
  },
  {
    id: 3,
    name: 'Goa',
    image: '/Goa.jpg',
    rating: 4.7,
    price: '₹12,999',
    region: 'west',
    experience: 'adventure'
  },
  {
    id: 4,
    name: 'Himachal Pradesh',
    image: '/HimachalPradesh.jpg',
    rating: 4.8,
    price: '₹16,499',
    region: 'north',
    experience: 'adventure'
  },
  {
    id: 5,
    name: 'Varanasi',
    image: '/Varanasi.jpg',
    rating: 4.6,
    price: '₹13,999',
    region: 'east',
    experience: 'culture'
  },
  {
    id: 6,
    name: 'Andaman Islands',
    image: '/Andaman.jpg',
    rating: 4.9,
    price: '₹24,999',
    region: 'east',
    experience: 'nature'
  }
];
