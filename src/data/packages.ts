export interface Package {
  id: number;
  name: string;
  image: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Luxury Rajasthan",
    image: "/Rajasthan.jpg",
    duration: "8 Days / 7 Nights",
    description: "Experience the royal heritage of Rajasthan with stays in luxury palace hotels and private guided tours.",
    price: "₹75,999",
    features: ["Luxury Palace Stays", "Private Tour Guide", "Heritage Walk", "Desert Safari", "Cultural Performances"]
  },
  {
    id: 2,
    name: "Kerala Wellness Retreat",
    image: "/Welness.jpg",
    duration: "7 Days / 6 Nights",
    description: "Rejuvenate your mind, body, and soul with traditional Ayurvedic treatments and yoga sessions in Kerala.",
    price: "₹62,999",
    features: ["Ayurvedic Spa Treatments", "Daily Yoga Sessions", "Organic Meals", "Meditation Classes", "Nature Walks"]
  },
  {
    id: 3,
    name: "Himalayan Expedition",
    image: "/HimachalPradesh.jpg",
    duration: "10 Days / 9 Nights",
    description: "Embark on an adventure through the majestic Himalayas with guided treks and cultural experiences.",
    price: "₹89,999",
    features: ["Guided Treks", "Mountain Camping", "Local Homestays", "Wildlife Spotting", "Photography Sessions"]
  },
  {
    id: 4,
    name: "Heritage India",
    image: "/Heritage.jpg",
    duration: "12 Days / 11 Nights",
    description: "Journey through India's rich history with visits to UNESCO World Heritage sites and ancient monuments.",
    price: "₹95,999",
    features: ["UNESCO Site Visits", "Expert Historians", "Luxury Accommodations", "Private Transfers", "Cultural Workshops"]
  },
  {
    id: 5,
    name: "Family Adventure",
    image: "/Family.jpg",
    duration: "9 Days / 8 Nights",
    description: "Create unforgettable memories with a family-friendly tour featuring activities for all ages.",
    price: "₹82,999",
    features: ["Kid-Friendly Activities", "Wildlife Safaris", "Adventure Parks", "Interactive Workshops", "Comfortable Stays"]
  },
  {
    id: 6,
    name: "Honeymoon Special",
    image: "/HoneyMoon.jpg",
    duration: "7 Days / 6 Nights",
    description: "Celebrate your love with a romantic getaway featuring private dinners, couple spa treatments, and scenic locations.",
    price: "₹78,999",
    features: ["Romantic Dinners", "Couple Spa", "Luxury Accommodations", "Private Transfers", "Sunset Cruises"]
  },
  {
    id: 7,
    name: "Beach Paradise",
    image: "/Goa.jpg",
    duration: "6 Days / 5 Nights",
    description: "Relax on some of India's most beautiful beaches with water activities and beachfront accommodations.",
    price: "₹34,999",
    features: ["Beachfront Stays", "Water Sports", "Island Excursions", "Seafood Dining", "Sunset Cruises"]
  },
  {
    id: 8,
    name: "Himalayan Explorer",
    image: "/HimalaynTour.jpg",
    duration: "10 Days / 9 Nights",
    description: "Journey through the majestic Himalayas with stunning mountain views and authentic local experiences.",
    price: "₹49,999",
    features: ["Mountain Treks", "Local Homestays", "Cultural Immersion", "Adventure Activities", "Spiritual Retreats"]
  },
  {
    id: 9,
    name: "Backwaters Escape",
    image: "/Kerala.jpg",
    duration: "5 Days / 4 Nights",
    description: "Experience the tranquil backwaters of Kerala on a traditional houseboat with authentic local cuisine.",
    price: "₹28,499",
    features: ["Houseboat Stay", "Village Tours", "Ayurvedic Massages", "Cultural Performances", "Local Cuisine"]
  },
  {
    id: 10,
    name: "Desert Adventure",
    image: "/Adventure.jpg",
    duration: "6 Days / 5 Nights",
    description: "Explore the colorful deserts of Rajasthan with camel safaris, folk music, and heritage accommodations.",
    price: "₹31,999",
    features: ["Camel Safaris", "Desert Camping", "Folk Performances", "Heritage Stays", "Local Crafts Workshops"]
  }
];
