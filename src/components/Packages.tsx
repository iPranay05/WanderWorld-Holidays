'use client';

import React from 'react';
import { packages } from '@/data/packages';
import Link from 'next/link';

interface PackagesProps {
  setSelectedPackage: (pkg: any) => void;
  setShowBookingModal: (show: boolean) => void;
  showAll?: boolean;
}

const Packages: React.FC<PackagesProps> = ({
  setSelectedPackage,
  setShowBookingModal,
  showAll = false
}) => {
  // Display only 3 packages on the home page, or all packages on the packages page
  const displayPackages = showAll ? packages : packages.slice(0, 3);
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="packages">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Special Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Curated travel packages designed for different preferences and experiences</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden package-card">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Package Includes:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-emerald-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-6 mb-3">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-emerald-600">{pkg.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setShowBookingModal(true);
                    }}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
                <Link 
                  href={`/package/${pkg.id}`}
                  className="block w-full text-center border border-emerald-600 text-emerald-600 py-2 rounded-md font-medium hover:bg-emerald-50 transition duration-300 mt-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <a 
              href="/packages" 
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View More Packages
            </a>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .package-card {
          transition: all 0.3s ease;
        }
        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default Packages;
