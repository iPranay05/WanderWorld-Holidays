'use client';

import React, { useState } from 'react';
import { destinations } from '@/data/destinations';
import Link from 'next/link';
import { FiMapPin, FiFilter, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface FeaturedDestinationsProps {
  setShowPackages: (show: boolean) => void;
  setShowAbout: (show: boolean) => void;
  setShowContact: (show: boolean) => void;
  setActiveTab: (tab: string) => void;
  showAll?: boolean;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  setShowPackages,
  setShowAbout,
  setShowContact,
  setActiveTab,
  showAll = false
}) => {
  const [regionFilter, setRegionFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = destinations.filter(destination => {
    if (regionFilter !== 'all' && destination.region !== regionFilter) return false;
    if (experienceFilter !== 'all' && destination.experience !== experienceFilter) return false;
    
    // Price filtering logic
    if (priceFilter === 'budget') {
      const price = parseInt(destination.price.replace(/[^\d]/g, ''));
      if (price >= 15000) return false;
    } else if (priceFilter === 'mid') {
      const price = parseInt(destination.price.replace(/[^\d]/g, ''));
      if (price < 15000 || price > 20000) return false;
    } else if (priceFilter === 'luxury') {
      const price = parseInt(destination.price.replace(/[^\d]/g, ''));
      if (price <= 20000) return false;
    }
    
    return true;
  });

  // Display only 6 destinations on the home page, or all destinations on the destinations page
  const displayDestinations = showAll ? filteredDestinations : filteredDestinations.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="destinations">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Destinations</h2>
          <div className="w-16 h-1 bg-indigo-600 mt-2 mb-4 rounded-full"></div>
          <p className="text-gray-600">{filteredDestinations.length} destinations found</p>
        </div>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
        >
          <FiFilter size={16} />
          Show Filters
        </button>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8 p-6 bg-white rounded-xl shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <div className="relative">
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                >
                  <option value="all">All Regions</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <FiChevronDown size={16} />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <div className="relative">
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                >
                  <option value="all">All Experiences</option>
                  <option value="culture">Cultural</option>
                  <option value="adventure">Adventure</option>
                  <option value="nature">Nature</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <FiChevronDown size={16} />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="relative">
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (Under ₹15,000)</option>
                  <option value="mid">Mid-range (₹15,000 - ₹20,000)</option>
                  <option value="luxury">Luxury (Above ₹20,000)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <FiChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Section Title - Mobile */}
      <div className="block md:hidden mobile-section-title px-4 mt-8">
        <h2 className="text-gray-900">Our Destinations</h2>
        <span className="view-all">View all</span>
      </div>
      
      {/* Destination Cards */}
      <div className="block md:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 horizontal-scroll">
        <div className="flex space-x-4">
          {displayDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className="mobile-card"
            >
              <div className="mobile-card-image">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                  {destination.price}
                </div>
              </div>
              <div className="mobile-card-content">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{destination.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FiMapPin size={14} className="mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < destination.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      // Handle booking logic
                    }}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View More Button for Mobile */}
      <div className="block md:hidden text-center mt-8 mb-12">
        <Link 
          href="/destinations" 
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-sm"
        >
          View More Destinations
        </Link>
      </div>
      
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayDestinations.map((destination) => (
          <motion.div 
            key={destination.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                {destination.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{destination.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <FiMapPin size={14} className="mr-1" />
                <span className="text-sm">{destination.location}</span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < destination.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    // Handle booking logic
                  }}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View More Button - only show on home page */}
      {!showAll && (
        <div className="hidden md:text-center mt-12">
          <Link 
            href="/destinations" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
            View More Destinations
          </Link>
        </div>
      )}
    </section>
  );
};

export default FeaturedDestinations;
