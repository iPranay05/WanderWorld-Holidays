'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { packages } from '@/data/packages';

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = params.id as string;
  
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('packages');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  useEffect(() => {
    // Find the package based on the ID from the URL
    const pkg = packages.find(p => p.id.toString() === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
    }
  }, [packageId]);
  
  if (!selectedPackage) {
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
          <p className="text-xl text-gray-600">Loading package details...</p>
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
            src={selectedPackage.image} 
            alt={selectedPackage.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 py-10">
              <div className="flex items-center mb-2">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                  {selectedPackage.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedPackage.name}</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Overview</h2>
              <p className="text-gray-700 mb-6">
                {selectedPackage.description}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Package Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {selectedPackage.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Itinerary</h3>
              <div className="space-y-6 mb-6">
                {/* Sample itinerary - in a real app, this would come from the package data */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 1: Arrival and Welcome</h4>
                  <p className="text-gray-700">Arrive at your destination and check into your hotel. Meet your tour guide for a welcome dinner and briefing about the exciting days ahead.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 2: Exploring Local Attractions</h4>
                  <p className="text-gray-700">After breakfast, embark on a guided tour of the main attractions. Enjoy lunch at a local restaurant and continue sightseeing in the afternoon.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 3: Cultural Experiences</h4>
                  <p className="text-gray-700">Immerse yourself in the local culture with visits to traditional villages, craft workshops, and cultural performances.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 4: Nature and Adventure</h4>
                  <p className="text-gray-700">Experience the natural beauty of the region with outdoor activities and scenic viewpoints.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 5: Leisure and Departure</h4>
                  <p className="text-gray-700">Enjoy a leisurely morning before checking out and departing with wonderful memories of your journey.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodation</h3>
              <p className="text-gray-700 mb-6">
                This package includes stays at carefully selected hotels that offer comfort, convenience, and excellent service. Depending on the package category you choose, accommodations range from charming boutique hotels to luxury resorts, all chosen to enhance your travel experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-700">
                All transfers between airports, hotels, and sightseeing spots are included in air-conditioned vehicles. For longer journeys, comfortable coaches or trains are provided to ensure a pleasant travel experience.
              </p>
            </div>
            
            {/* Gallery Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img 
                      src={selectedPackage.image} 
                      alt={`${selectedPackage.name} - Gallery ${item}`} 
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Package</h3>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-emerald-600 mb-4">{selectedPackage.price}</p>
                <p className="text-sm text-gray-500 mb-6">*Price per person on twin sharing basis</p>
                
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 mb-4"
                >
                  Book Now
                </button>
                
                <a 
                  href={`mailto:wanderworldandco@gmail.com?subject=Inquiry about ${selectedPackage.name}&body=Hi, I'm interested in learning more about ${selectedPackage.name}.`}
                  className="w-full block text-center border border-emerald-600 text-emerald-600 py-3 rounded-md font-medium hover:bg-emerald-50 transition-all duration-300"
                >
                  Send Inquiry
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Package Details:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3"><i className="fas fa-calendar"></i></span>
                    <div>
                      <span className="font-medium block">Duration</span>
                      <span className="text-gray-600">{selectedPackage.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3"><i className="fas fa-users"></i></span>
                    <div>
                      <span className="font-medium block">Group Size</span>
                      <span className="text-gray-600">Max 12 people</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3"><i className="fas fa-map-marker-alt"></i></span>
                    <div>
                      <span className="font-medium block">Destinations</span>
                      <span className="text-gray-600">Multiple locations</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3"><i className="fas fa-language"></i></span>
                    <div>
                      <span className="font-medium block">Languages</span>
                      <span className="text-gray-600">English, Hindi</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Included in the Price:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Meals as per itinerary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Guided tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span>Entrance fees</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-gray-600 mb-4">Contact our travel experts for any queries</p>
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
          selectedItem={selectedPackage}
          itemType="package"
        />
      )}
    </div>
  );
}
