'use client';

import React from 'react';
import { packages, Package } from '@/data/packages';
import Link from 'next/link';
import { FiCalendar, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface PackagesProps {
  setSelectedPackage: (pkg: any) => void;
  setShowBookingModal: (show: boolean) => void;
  showAll?: boolean;
  filteredPackages?: Package[];
}

const Packages: React.FC<PackagesProps> = ({
  setSelectedPackage,
  setShowBookingModal,
  showAll = false,
  filteredPackages
}) => {
  // Use filteredPackages if provided, otherwise use all packages
  const allPackages = filteredPackages || packages;
  
  // Display only 3 packages on the home page, or all packages on the packages page
  const displayPackages = showAll ? allPackages : allPackages.slice(0, 3);
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="packages">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Special Packages</h2>
            <div className="w-16 h-1 bg-indigo-600 mt-2 mb-4 rounded-full"></div>
            <p className="text-gray-600">
              {displayPackages.length === 0 
                ? "No packages found matching your search" 
                : `${displayPackages.length} curated travel experiences for you`}
            </p>
          </div>
        </div>
        
        {displayPackages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No packages found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPackages.map((pkg) => (
              <motion.div 
                key={pkg.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiCalendar size={14} className="mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Package Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <FiCheck size={14} className="text-indigo-500 mt-1 mr-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowBookingModal(true);
                      }}
                      className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Book Now
                    </button>
                    <Link 
                      href={`/package/${pkg.id}`}
                      className="w-full text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              href="/packages" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              View More Packages
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;
