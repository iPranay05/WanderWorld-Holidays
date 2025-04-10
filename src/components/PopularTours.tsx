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

  const handleBookNow = (tour: any) => {
    setSelectedTour(tour);
    setShowBookingModal(true);
  };

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
          <>
            {/* Section Title - Mobile */}
            <div className="block md:hidden mobile-section-title px-4 mt-8">
              <h2 className="text-gray-900">Popular Tours</h2>
              <span className="view-all">View all</span>
            </div>
            
            {/* Mobile Horizontal Scrolling */}
            <div className="block md:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 horizontal-scroll">
              <div className="flex space-x-4">
                {displayTours.map((tour) => (
                  <div 
                    key={tour.id} 
                    className="mobile-card"
                  >
                    <div className="mobile-card-image">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                        {tour.price}
                      </div>
                    </div>
                    <div className="mobile-card-content">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{tour.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FiMapPin size={14} className="mr-1" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <FiClock size={14} className="mr-1" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Number(tour.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <button 
                          onClick={() => handleBookNow(tour)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </>
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
