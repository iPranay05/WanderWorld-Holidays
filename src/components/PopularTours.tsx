'use client';

import React from 'react';
import { tours } from '@/data/tours';
import Link from 'next/link';
import { FiMapPin, FiClock, FiUsers, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface PopularToursProps {
  setSelectedTour: (tour: any) => void;
  setShowBookingModal: (show: boolean) => void;
  showAll?: boolean;
  filteredTours?: typeof tours;
}

const PopularTours: React.FC<PopularToursProps> = ({
  setSelectedTour,
  setShowBookingModal,
  showAll = false,
  filteredTours
}) => {
  // Use filteredTours if provided, otherwise use default tours
  const toursToDisplay = filteredTours || tours;
  
  // Display only a subset of tours on the home page, or all tours on the tours page
  const displayTours = showAll ? toursToDisplay : toursToDisplay.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="tours">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Tours</h2>
            <div className="w-16 h-1 bg-indigo-600 mt-2 mb-4 rounded-full"></div>
            <p className="text-gray-600">{displayTours.length} amazing tour packages</p>
          </div>
          
          {showAll && (
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                <option>Sort by: Popular</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
              </select>
            </div>
          )}
        </div>
        
        {displayTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTours.map((tour) => (
              <motion.div 
                key={tour.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{tour.name}</h3>
                    <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-md">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700 text-sm font-medium">{tour.rating || '4.5'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <FiMapPin size={14} className="mr-1" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiClock size={14} className="mr-1" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiUsers size={14} className="mr-1" />
                      <span>{tour.groupSize || 'Small Group'}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setSelectedTour(tour);
                        setShowBookingModal(true);
                      }}
                      className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Book Now
                    </button>
                    <Link 
                      href={`/tour/${tour.id}`}
                      className="w-full text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <div className="text-5xl text-gray-300 mb-4">
              <FiCalendar size={60} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No tours found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
        
        {/* View More Button - only show on home page */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              href="/tours" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              View More Tours
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularTours;
