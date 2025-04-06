'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import PopularTours from '@/components/PopularTours';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Contact from '@/components/Contact';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

export default function Home() {
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('destinations');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
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
      
      {/* Hero Section */}
      <Hero 
        setActiveTab={setActiveTab}
        setShowContact={setShowContact}
        setShowPackages={setShowPackages}
        setShowAbout={setShowAbout}
      />
      
      {/* Destinations Section */}
      <FeaturedDestinations 
        setShowPackages={setShowPackages}
        setShowAbout={setShowAbout}
        setShowContact={setShowContact}
        setActiveTab={setActiveTab}
      />
      
      {/* Tours Section */}
      <PopularTours 
        setSelectedTour={setSelectedTour}
        setShowBookingModal={setShowBookingModal}
      />
      
      {/* Packages Section (conditionally rendered) */}
      {showPackages && (
        <Packages 
          setSelectedPackage={setSelectedPackage}
          setShowBookingModal={setShowBookingModal}
        />
      )}
      
      {/* About Section (conditionally rendered) */}
      {showAbout && <About />}
      
      {/* Contact Section (conditionally rendered) */}
      {showContact && <Contact />}
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal 
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedItem={selectedTour || selectedPackage}
          itemType={selectedTour ? 'tour' : 'package'}
        />
      )}
    </div>
  );
}
