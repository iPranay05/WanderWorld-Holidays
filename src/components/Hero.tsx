'use client';

import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  setShowContact: (show: boolean) => void;
  setShowPackages: (show: boolean) => void;
  setShowAbout: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  setShowContact,
  setShowPackages,
  setShowAbout
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab('destinations');
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Explore Beautiful Places
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Discover amazing destinations and create unforgettable memories with our curated travel experiences.
              </p>

              {/* Desktop Search form */}
              <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 hidden lg:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                      <FiMapPin className="text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Where are you going?" 
                        className="w-full focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                      <FiCalendar className="text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Choose date" 
                        className="w-full focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                      <FiUsers className="text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        placeholder="Add guests" 
                        className="w-full focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button 
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Popular searches */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Search:</h3>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => {
                      setSearchQuery('Beach');
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 transition-colors duration-200"
                  >
                    Beach
                  </button>
                  <button 
                    onClick={() => {
                      setSearchQuery('Mountain');
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 transition-colors duration-200"
                  >
                    Mountain
                  </button>
                  <button 
                    onClick={() => {
                      setSearchQuery('City Break');
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 transition-colors duration-200"
                  >
                    City Break
                  </button>
                  <button 
                    onClick={() => {
                      setSearchQuery('Cultural Spots');
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 transition-colors duration-200"
                  >
                    Cultural Spots
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content - Image with Search Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-first md:order-last mb-8 md:mb-0 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Travel Destination" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
            
            {/* Search Bar Overlay on Image - Mobile Only */}
            <div className="absolute bottom-6 left-0 right-0 px-4 lg:hidden">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <div className="relative">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <div className="bg-indigo-50 p-3 text-indigo-600">
                      <FiSearch size={18} />
                    </div>
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Where do you want to go?" 
                      className="w-full p-3 focus:outline-none text-sm"
                    />
                    <button 
                      className="bg-indigo-600 text-white p-3 hover:bg-indigo-700 transition-all duration-300"
                      onClick={handleSearch}
                    >
                      <FiSearch size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
