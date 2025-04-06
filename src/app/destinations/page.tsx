'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedDestinations from '@/components/FeaturedDestinations';

export default function DestinationsPage() {
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('destinations');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
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
              src="/rajasthan.jpg" 
              alt="India Destinations" 
              className="w-full h-full object-cover"
              style={{ opacity: 0.50 }}
            />
          </div>
          
          {/* Waves Animation */}
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
        
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Explore Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white opacity-90">
            Discover the most beautiful and culturally rich destinations across India
          </p>
        </div>
      </div>
      
      {/* Destinations Section */}
      <FeaturedDestinations 
        setShowPackages={setShowPackages}
        setShowAbout={setShowAbout}
        setShowContact={setShowContact}
        setActiveTab={setActiveTab}
        showAll={true}
      />
      
      {/* Footer */}
      <Footer />
      
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
