'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiStar, FiArrowRight } from 'react-icons/fi';

interface DestinationOfMonthProps {
  setActiveTab?: (tab: string) => void;
}

const DestinationOfMonth: React.FC<DestinationOfMonthProps> = ({ setActiveTab }) => {
  // This would typically come from an API or CMS
  const featuredDestination = {
    id: 3,
    name: 'Goa',
    image: '/goa.jpg',
    description: 'Experience the perfect blend of pristine beaches, vibrant nightlife, and Portuguese-influenced culture in this coastal paradise. Goa offers a unique mix of relaxation and adventure with its golden sands, water sports, historic churches, and delicious seafood cuisine.',
    rating: 4.8,
    price: '₹12,999',
    location: 'Western India',
    bestTimeToVisit: 'November to February',
    highlights: [
      'Pristine beaches with golden sands',
      'Portuguese-influenced architecture',
      'Vibrant nightlife and beach parties',
      'Water sports and adventure activities',
      'Delicious seafood and Goan cuisine'
    ]
  };
  
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Destination of the Month</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our handpicked recommendation for {currentMonth}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] lg:h-auto overflow-hidden"
            >
              <img 
                src={featuredDestination.image} 
                alt={featuredDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium">
                {currentMonth}'s Pick
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 lg:hidden">
                <h3 className="text-white text-2xl font-bold mb-2">{featuredDestination.name}</h3>
                <div className="flex items-center text-white mb-2">
                  <FiMapPin className="mr-1" />
                  <span>{featuredDestination.location}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
            >
              <div className="hidden lg:block">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{featuredDestination.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FiMapPin className="mr-1" />
                  <span>{featuredDestination.location}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-md">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span className="text-gray-700 font-medium">{featuredDestination.rating} Rating</span>
                </div>
                <div className="flex items-center ml-4">
                  <FiCalendar className="text-indigo-500 mr-1" />
                  <span className="text-gray-700">Best time: {featuredDestination.bestTimeToVisit}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredDestination.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {featuredDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-gray-500 text-sm">Starting from</span>
                  <span className="text-2xl font-bold text-indigo-600">{featuredDestination.price}</span>
                </div>
                <Link 
                  href={`/destination/${featuredDestination.id}`}
                  onClick={() => setActiveTab && setActiveTab('destinations')}
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  <span>Explore Now</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationOfMonth;
