'use client';

import React from 'react';
import { tours } from '@/data/tours';
import Link from 'next/link';

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wanderworld Tours</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover our most loved tour packages curated for unforgettable experiences</p>
        </div>
        
        {displayTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl tour-card">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium duration-badge">
                    {tour.duration}
                  </div>
                  <div className="tour-overlay">
                    <div className="tour-features">
                      <div className="feature-item">
                        <i className="fas fa-map-marker-alt text-white text-xl mb-1"></i>
                        <span>Premium Locations</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-utensils text-white text-xl mb-1"></i>
                        <span>Gourmet Meals</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-hotel text-white text-xl mb-1"></i>
                        <span>Luxury Stays</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="tour-title-3d">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-emerald-600 font-bold price-tag">{tour.price}</p>
                    <button
                      onClick={() => {
                        setSelectedTour(tour);
                        setShowBookingModal(true);
                      }}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 transition duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer book-button"
                    >
                      Book Now
                    </button>
                  </div>
                  <Link 
                    href={`/tour/${tour.id}`}
                    className="block w-full text-center border border-emerald-600 text-emerald-600 py-2 rounded-md font-medium hover:bg-emerald-50 transition duration-300 mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl text-gray-300 mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No tours found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
        
        {/* View More Button - only show on home page */}
        {!showAll && (
          <div className="text-center mt-8">
            <a 
              href="/tours" 
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View More Tours
            </a>
          </div>
        )}
        
        <style jsx>{`
          .tour-card {
            position: relative;
            transform-style: preserve-3d;
            transition: all 0.5s ease;
          }
          .tour-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(to top, rgba(5, 150, 105, 0.9), transparent);
            transition: height 0.5s ease;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 20px;
          }
          .tour-card:hover .tour-overlay {
            height: 100%;
          }
          .tour-features {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 0 10px;
            transform: translateZ(30px);
          }
          .feature-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            font-size: 0.875rem;
          }
          .duration-badge {
            transform: translateZ(20px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .tour-title-3d {
            transform: translateZ(15px);
          }
          .price-tag {
            transform: translateZ(10px);
          }
          .book-button {
            transform: translateZ(25px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default PopularTours;
