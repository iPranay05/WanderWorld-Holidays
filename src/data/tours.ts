export interface Tour {
  id: number;
  name: string;
  image: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
  rating: string;
  location: string;
  groupSize: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Royal Rajasthan Tour',
    image: '/RajasthanTour.jpg',
    duration: '7 Days',
    description: 'Experience the royal heritage of Rajasthan with visits to majestic palaces and forts.',
    price: '₹35,999',
    features: ['Palace Tours', 'Desert Safari', 'Cultural Performances', 'Heritage Stays', 'Local Cuisine'],
    rating: '4.8',
    location: 'Rajasthan',
    groupSize: 'Small Group'
  },
  {
    id: 2,
    name: 'Kerala Backwaters Tour',
    image: '/Keralatour.jpg',
    duration: '5 Days',
    description: 'Cruise through the serene backwaters of Kerala and experience the lush tropical paradise.',
    price: '₹28,999',
    features: ['Houseboat Stay', 'Ayurvedic Spa', 'Tea Plantations', 'Wildlife Sanctuary', 'Beach Relaxation'],
    rating: '4.7',
    location: 'Kerala',
    groupSize: 'Medium Group'
  },
  {
    id: 3,
    name: 'Golden Triangle Tour',
    image: '/GoldenTour.jpg',
    duration: '6 Days',
    description: 'Visit Delhi, Agra, and Jaipur to experience the rich history and culture of North India.',
    price: '₹32,999',
    features: ['Taj Mahal Visit', 'Historical Monuments', 'Shopping Tours', 'Culinary Experiences', 'City Sightseeing'],
    rating: '4.9',
    location: 'North India',
    groupSize: 'Large Group'
  },
  {
    id: 4,
    name: 'Himalayan Adventure',
    image: '/HimalaynTour.jpg',
    duration: '8 Days',
    description: 'Trek through the breathtaking landscapes of the Himalayas and experience local culture.',
    price: '₹42,999',
    features: ['Trekking', 'Camping', 'Mountain Views', 'Local Homestays', 'Adventure Activities'],
    rating: '4.6',
    location: 'Himalayas',
    groupSize: 'Small Group'
  },
  {
    id: 5,
    name: 'Spiritual Varanasi Tour',
    image: '/Varanasi.jpg',
    duration: '4 Days',
    description: 'Immerse yourself in the spiritual heart of India with a journey to the sacred city of Varanasi.',
    price: '₹24,999',
    features: ['Ganga Aarti', 'Temple Tours', 'Boat Rides', 'Spiritual Ceremonies', 'Cultural Experiences'],
    rating: '4.5',
    location: 'Varanasi',
    groupSize: 'Medium Group'
  },
  {
    id: 6,
    name: 'Wildlife Safari Tour',
    image: '/Wildlife.jpg',
    duration: '6 Days',
    description: 'Explore India\'s diverse wildlife with safaris in some of the country\'s best national parks.',
    price: '₹38,999',
    features: ['Wildlife Safaris', 'National Parks', 'Birdwatching', 'Tiger Spotting', 'Eco-Lodges'],
    rating: '4.6',
    location: 'Various National Parks',
    groupSize: 'Small Group'
  },
  {
    id: 7,
    name: 'Goa Beach Retreat',
    image: '/Goa.jpg',
    duration: '5 Days',
    description: 'Relax on the beautiful beaches of Goa and enjoy the unique Portuguese-influenced culture.',
    price: '₹26,999',
    features: ['Beach Relaxation', 'Water Sports', 'Nightlife', 'Portuguese Architecture', 'Seafood Cuisine'],
    rating: '4.7',
    location: 'Goa',
    groupSize: 'Medium Group'
  },
  {
    id: 8,
    name: 'Andaman Island Escape',
    image: '/Andaman.jpg',
    duration: '7 Days',
    description: 'Discover the pristine beaches and crystal-clear waters of the Andaman Islands.',
    price: '₹45,999',
    features: ['Beach Relaxation', 'Snorkeling', 'Scuba Diving', 'Island Hopping', 'Water Sports'],
    rating: '4.8',
    location: 'Andaman Islands',
    groupSize: 'Small Group'
  }
];
