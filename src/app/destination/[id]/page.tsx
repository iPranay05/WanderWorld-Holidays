'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { destinations } from '@/data/destinations';

export default function DestinationDetailPage() {
  const params = useParams();
  const destinationId = params.id as string;
  
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('destinations');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  
  useEffect(() => {
    // Find the destination based on the ID from the URL
    const destination = destinations.find(dest => dest.id.toString() === destinationId);
    if (destination) {
      setSelectedDestination(destination);
    }
  }, [destinationId]);
  
  if (!selectedDestination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowPackages={setShowPackages}
          setShowAbout={setShowAbout}
          setShowContact={setShowContact}
        />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Loading destination details...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
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
      <div className="relative pt-16">
        <div className="w-full h-96 relative">
          <img 
            src={selectedDestination.image} 
            alt={selectedDestination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 py-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedDestination.name}</h1>
              <div className="flex items-center text-white mb-4">
                <span className="mr-2 text-yellow-400"><i className="fas fa-star"></i></span>
                <span>{selectedDestination.rating} rating</span>
                <span className="mx-3">|</span>
                <span>{selectedDestination.region} India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {selectedDestination.name}</h2>
              <p className="text-gray-700 mb-6">
                {selectedDestination.description || `Experience the magic of ${selectedDestination.name}, one of India's most captivating destinations. This beautiful location offers a perfect blend of culture, history, and natural beauty that will leave you with unforgettable memories.`}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {selectedDestination.highlights ? (
                  selectedDestination.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span>{highlight}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span>Iconic landmarks and attractions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span>Rich cultural experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span>Authentic local cuisine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span>Breathtaking natural scenery</span>
                    </li>
                  </>
                )}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit</h3>
              <p className="text-gray-700 mb-6">
                {selectedDestination.bestTimeToVisit || 'October to March is generally the best time to visit when the weather is pleasant and ideal for sightseeing and outdoor activities.'}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Reach</h3>
              <p className="text-gray-700">
                {selectedDestination.howToReach || `${selectedDestination.name} is well-connected by air, rail, and road. The nearest airport has regular flights from major cities, and there are good train and bus connections available.`}
              </p>
            </div>
            
            {/* Gallery Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img 
                      src={selectedDestination.image} 
                      alt={`${selectedDestination.name} - Gallery ${item}`} 
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Trip</h3>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-emerald-600 mb-4">{selectedDestination.price}</p>
                <p className="text-sm text-gray-500 mb-6">*Price per person on twin sharing basis</p>
                
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 mb-4"
                >
                  Book Now
                </button>
                
                <a 
                  href={`mailto:wanderworldandco@gmail.com?subject=Inquiry about ${selectedDestination.name}&body=Hi, I'm interested in learning more about ${selectedDestination.name}.`}
                  className="w-full block text-center border border-emerald-600 text-emerald-600 py-3 rounded-md font-medium hover:bg-emerald-50 transition-all duration-300"
                >
                  Send Inquiry
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Sightseeing as per itinerary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Daily breakfast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>All transfers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Local guide services</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-gray-600 mb-4">Contact our travel experts for any queries or customizations</p>
                <div className="flex items-center mb-3">
                  <span className="text-emerald-500 mr-3"><i className="fas fa-phone"></i></span>
                  <span>+91 93241 02323, +91 77808 33317</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3"><i className="fas fa-envelope"></i></span>
                  <span>wanderworldandco@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal 
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedItem={selectedDestination}
          itemType="destination"
        />
      )}
    </div>
  );
}
