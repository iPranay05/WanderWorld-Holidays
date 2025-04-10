'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import { motion } from 'framer-motion';

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
        <div className="w-full h-[500px] relative">
          <img 
            src="/rajasthan.jpg" 
            alt="India Destinations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Explore Destinations</h1>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto mb-10 text-white">
                Discover the most beautiful and culturally rich destinations across India
              </p>
            </motion.div>
          </div>
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
    </div>
  );
}
