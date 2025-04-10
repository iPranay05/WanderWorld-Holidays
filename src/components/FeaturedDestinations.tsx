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
      
      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {destination.price}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{destination.name}</h3>
                <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-md">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-gray-700 text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <FiMapPin size={14} className="mr-1" />
                <span className="text-sm">{destination.location}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {destination.description || `Experience the beauty and culture of ${destination.name} with our curated travel packages.`}
              </p>
              <Link
                href={`/destination/${destination.id}`}
                className="w-full inline-block text-center bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View More Button - only show on home page */}
      {!showAll && (
        <div className="text-center mt-12">
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
