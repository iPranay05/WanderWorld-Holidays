'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Packages from '@/components/Packages';
import BookingModal from '@/components/BookingModal';
import { packages } from '@/data/packages';
import { motion } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';

export default function PackagesPage() {
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('packages');
  const [showPackages, setShowPackages] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(packages);
  
  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Filter packages based on search term
    if (term.trim() === '') {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter(pkg => 
        pkg.name.toLowerCase().includes(term.toLowerCase()) || 
        pkg.description.toLowerCase().includes(term.toLowerCase()) ||
        pkg.price.toLowerCase().includes(term.toLowerCase()) ||
        pkg.duration.toLowerCase().includes(term.toLowerCase()) ||
        pkg.features.some(feature => feature.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredPackages(filtered);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowPackages={setShowPackages}
        setShowAbout={setShowAbout}
        setShowContact={setShowContact}
      />
      
      {/* Page Header with Elegant Background */}
      <div className="relative pt-16">
        <div className="w-full h-[500px] relative">
          <img 
            src="/goa.jpg" 
            alt="India Packages" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Special Travel Packages</h1>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto mb-10 text-white">
                Discover our most loved travel packages curated for unforgettable experiences
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-8 relative">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <FiSearch className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search packages by name, features, price or duration..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-5 py-4 pl-12 pr-10 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => {setSearchTerm(''); setFilteredPackages(packages);}}
                      className="absolute right-4 text-gray-400 hover:text-gray-600"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Packages Section */}
      <Packages 
        setSelectedPackage={setSelectedPackage}
        setShowBookingModal={setShowBookingModal}
        showAll={true}
        filteredPackages={filteredPackages}
      />
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal 
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedItem={selectedPackage}
          itemType="package"
        />
      )}
    </div>
  );
}
