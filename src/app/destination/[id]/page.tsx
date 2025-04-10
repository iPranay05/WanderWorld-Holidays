'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { destinations } from '@/data/destinations';
import { FiMapPin, FiCalendar, FiClock, FiCheck, FiMail, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-40 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-60 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
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
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="w-full h-[500px] relative">
          <img 
            src={selectedDestination.image} 
            alt={selectedDestination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 py-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedDestination.name}</h1>
                <div className="flex items-center text-white mb-4 flex-wrap">
                  <div className="flex items-center mr-4">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span>{selectedDestination.rating} rating</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <FiMapPin className="mr-1" />
                    <span>{selectedDestination.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full mt-2">
                      {selectedDestination.experience}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {selectedDestination.name}</h2>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedDestination.description || `Experience the magic of ${selectedDestination.name}, one of India's most captivating destinations. This beautiful location offers a perfect blend of culture, history, and natural beauty that will leave you with unforgettable memories.`}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {selectedDestination.highlights ? (
                  selectedDestination.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start">
                      <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Iconic landmarks and attractions</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Rich cultural experiences</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Authentic local cuisine</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Breathtaking natural scenery</span>
                    </li>
                  </>
                )}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit</h3>
              <div className="flex items-start mb-6">
                <FiCalendar className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  {selectedDestination.bestTimeToVisit || 'October to March is generally the best time to visit when the weather is pleasant and ideal for sightseeing and outdoor activities.'}
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Reach</h3>
              <div className="flex items-start">
                <FiMapPin className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  {selectedDestination.howToReach || `${selectedDestination.name} is well-connected by air, rail, and road. The nearest airport has regular flights from major cities, and there are good train and bus connections available.`}
                </p>
              </div>
            </motion.div>
            
            {/* Gallery Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg group">
                    <img 
                      src={selectedDestination.image} 
                      alt={`${selectedDestination.name} - Gallery ${item}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Trip</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{selectedDestination.price}</p>
                <p className="text-sm text-gray-500 mb-6">*Price per person on twin sharing basis</p>
                
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-all duration-300 mb-4 shadow-sm"
                >
                  Book Now
                </button>
                
                <a 
                  href={`mailto:info@wonderlandholidays.com?subject=Inquiry about ${selectedDestination.name}&body=Hi, I'm interested in learning more about ${selectedDestination.name}.`}
                  className="w-full block text-center border border-indigo-600 text-indigo-600 py-3 rounded-md font-medium hover:bg-indigo-50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    <FiMail className="mr-2" />
                    <span>Send Inquiry</span>
                  </div>
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Sightseeing as per itinerary</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Daily breakfast</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">All transfers</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Local guide services</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-gray-600 mb-4">Our travel experts are here to assist you in planning your perfect trip.</p>
                <div className="flex items-center text-indigo-600 font-medium">
                  <FiClock className="mr-2" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Similar Destinations */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Similar Destinations</h2>
          <p className="text-gray-600 mb-8 text-center">You might also be interested in these destinations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations
              .filter(dest => dest.id !== selectedDestination.id && dest.region === selectedDestination.region)
              .slice(0, 3)
              .map(destination => (
                <motion.div 
                  key={destination.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{destination.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FiMapPin size={14} className="mr-1" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <FiStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-700">{destination.rating}</span>
                      </div>
                      <span className="text-indigo-600 font-bold">{destination.price}</span>
                    </div>
                    <a 
                      href={`/destination/${destination.id}`}
                      className="mt-4 block w-full text-center bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      
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
