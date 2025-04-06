'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PopularTours from '@/components/PopularTours';
import BookingModal from '@/components/BookingModal';
import { tours } from '@/data/tours';

export default function ToursPage() {
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('tours');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTours, setFilteredTours] = useState(tours);
  
  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Filter tours based on search term
    if (term.trim() === '') {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter(tour => 
        tour.name.toLowerCase().includes(term.toLowerCase()) || 
        tour.description.toLowerCase().includes(term.toLowerCase()) ||
        tour.price.toLowerCase().includes(term.toLowerCase()) ||
        tour.duration.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTours(filtered);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
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
        <div className="header-bg">
          {/* Background Image with Low Opacity */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Kerala.jpg" 
              alt="India Landscape" 
              className="w-full h-full object-cover"
              style={{ opacity: 0.15 }}
            />
          </div>
          
          {/* Waves Animation */}
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
        
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Wanderworld Tours</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white opacity-90">
            Discover our most loved tour packages curated for unforgettable experiences
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search tours by name, description, price or duration..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-5 py-4 pl-12 pr-10 rounded-lg shadow-lg border-0 focus:ring-2 focus:ring-emerald-500 text-gray-700 placeholder-gray-400"
              />
              {searchTerm && (
                <button 
                  onClick={() => {setSearchTerm(''); setFilteredTours(tours);}}
                  className="absolute right-4 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tours Section */}
      <PopularTours 
        setSelectedTour={setSelectedTour}
        setShowBookingModal={setShowBookingModal}
        showAll={true}
        filteredTours={filteredTours}
      />
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal 
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedItem={selectedTour}
          itemType="tour"
        />
      )}
      
      {/* CSS for the animated wave background */}
      <style jsx>{`
        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
          overflow: hidden;
        }
        
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,176C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: 1440px 100px;
          animation: wave 15s linear infinite;
        }
        
        .wave1 {
          animation: wave 15s linear infinite;
          z-index: 1000;
          opacity: 0.6;
          animation-delay: 0s;
          bottom: 0;
        }
        
        .wave2 {
          animation: wave2 10s linear infinite;
          z-index: 999;
          opacity: 0.4;
          animation-delay: -5s;
          bottom: 10px;
        }
        
        .wave3 {
          animation: wave 18s linear infinite;
          z-index: 998;
          opacity: 0.2;
          animation-delay: -2s;
          bottom: 15px;
        }
        
        .wave4 {
          animation: wave2 12s linear infinite;
          z-index: 997;
          opacity: 0.7;
          animation-delay: -5s;
          bottom: 20px;
        }
        
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1440px;
          }
        }
        
        @keyframes wave2 {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: -1440px;
          }
        }
      `}</style>
    </div>
  );
}
