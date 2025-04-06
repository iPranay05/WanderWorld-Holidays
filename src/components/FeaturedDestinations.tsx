'use client';

import React, { useState } from 'react';
import { destinations } from '@/data/destinations';
import Link from 'next/link';

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
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore the most beautiful and culturally rich destinations across India</p>
      </div>
      
      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="all">All Regions</option>
              <option value="north">North India</option>
              <option value="south">South India</option>
              <option value="east">East India</option>
              <option value="west">West India</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
            >
              <option value="all">All Experiences</option>
              <option value="culture">Cultural</option>
              <option value="adventure">Adventure</option>
              <option value="nature">Nature</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="budget">Budget (Under ₹15,000)</option>
              <option value="mid">Mid-range (₹15,000 - ₹20,000)</option>
              <option value="luxury">Luxury (Above ₹20,000)</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transform perspective-1000 cursor-pointer destination-card">
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="destination-overlay">
                <div className="destination-content">
                  <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-white mb-4">Experience the magic of {destination.name}</p>
                  <Link href={`/destination/${destination.id}`} className="bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-emerald-50 transition-all duration-300 rounded-md whitespace-nowrap cursor-pointer inline-block">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6 relative z-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1"><i className="fas fa-star"></i></span>
                  <span className="text-gray-700">{destination.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Starting from</p>
                <p className="text-emerald-600 font-bold">{destination.price}</p>
              </div>
              <Link
                href={`/destination/${destination.id}`}
                className="w-full bg-emerald-600 text-white py-2 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer destination-button inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More Button - only show on home page */}
      {!showAll && (
        <div className="text-center mt-12">
          <a 
            href="/destinations" 
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            View More Destinations
          </a>
        </div>
      )}
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .destination-card {
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }
        .destination-card:hover {
          transform: translateY(-10px) rotateX(5deg);
        }
        .destination-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 150, 105, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .destination-card:hover .destination-overlay {
          opacity: 1;
        }
        .destination-content {
          text-align: center;
          padding: 1rem;
          transform: translateZ(50px);
        }
        .destination-button {
          transform: translateZ(20px);
        }
      `}</style>
    </section>
  );
};

export default FeaturedDestinations;
