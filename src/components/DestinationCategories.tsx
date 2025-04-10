'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

interface DestinationCategoriesProps {
  setActiveTab?: (tab: string) => void;
}

const categories: CategoryItem[] = [
  {
    id: 'beach',
    name: 'Beach',
    image: '/goa.jpg'
  },
  {
    id: 'temple',
    name: 'Temple',
    image: '/Rajasthan.jpg'
  },
  {
    id: 'mountain',
    name: 'Mountain',
    image: '/Shimla.jpg'
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    image: '/Kerala.jpg'
  },
  {
    id: 'heritage',
    name: 'Heritage',
    image: '/Agra.jpg'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    image: '/Rishikesh.jpg'
  }
];

const DestinationCategories: React.FC<DestinationCategoriesProps> = ({ setActiveTab }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Categories</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore destinations by category to find your perfect holiday experience
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {categories.map((category) => (
            <Link 
              href={`/destinations?category=${category.id}`} 
              key={category.id}
              onClick={() => setActiveTab && setActiveTab('destinations')}
              className="block"
            >
              <motion.div 
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-t-[2.5rem] h-[180px] shadow-md">
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60 z-10"
                  ></div>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-20">
                    <h3 className="text-white font-semibold text-lg tracking-wide">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/destinations"
            onClick={() => setActiveTab && setActiveTab('destinations')}
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
          >
            <span>View All Destinations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationCategories;
