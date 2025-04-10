'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { tours } from '@/data/tours';
import { FiMapPin, FiCalendar, FiClock, FiCheck, FiMail, FiStar, FiUsers, FiMap } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function TourDetailPage() {
  const params = useParams();
  const tourId = params.id as string;
  
  // State for active tab and section visibility
  const [activeTab, setActiveTab] = useState('tours');
  const [showPackages, setShowPackages] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // State for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);
  
  useEffect(() => {
    // Find the tour based on the ID from the URL
    const tour = tours.find(t => t.id.toString() === tourId);
    if (tour) {
      setSelectedTour(tour);
    }
  }, [tourId]);
  
  if (!selectedTour) {
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
            src={selectedTour.image} 
            alt={selectedTour.name} 
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
                <div className="flex items-center mb-2 flex-wrap gap-2">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedTour.duration}
                  </span>
                  <div className="flex items-center text-white">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span>{selectedTour.rating}</span>
                  </div>
                  {selectedTour.location && (
                    <div className="flex items-center text-white ml-3">
                      <FiMapPin className="mr-1" />
                      <span>{selectedTour.location}</span>
                    </div>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedTour.name}</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedTour.description}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tour Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {selectedTour.features && selectedTour.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Itinerary</h3>
              <div className="space-y-6 mb-6">
                {/* Sample itinerary - in a real app, this would come from the tour data */}
                <div className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 1: Arrival and Welcome</h4>
                  <p className="text-gray-700">Arrive at your destination and check into your hotel. Meet your tour guide for a welcome dinner and briefing about the exciting days ahead.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 2: Exploring Local Attractions</h4>
                  <p className="text-gray-700">After breakfast, embark on a guided tour of the main attractions. Enjoy lunch at a local restaurant and continue sightseeing in the afternoon.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 3: Cultural Experiences</h4>
                  <p className="text-gray-700">Immerse yourself in the local culture with visits to traditional villages, craft workshops, and cultural performances.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 4: Nature and Adventure</h4>
                  <p className="text-gray-700">Experience the natural beauty of the region with outdoor activities and scenic viewpoints.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-100">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="font-bold text-gray-900 mb-2">Day 5: Leisure and Departure</h4>
                  <p className="text-gray-700">Enjoy a leisurely morning before checking out and departing with wonderful memories of your journey.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Information</h3>
              <p className="text-gray-700">
                This tour is designed to provide a balanced experience of culture, nature, and relaxation. The itinerary may be adjusted based on weather conditions and local events. All activities are guided by experienced local experts who will ensure your safety and enjoyment throughout the tour.
              </p>
            </motion.div>
            
            {/* Gallery Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Gallery</h2>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg group">
                    <img 
                      src={selectedTour.image} 
                      alt={`${selectedTour.name} - Gallery ${item}`} 
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Tour</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{selectedTour.price}</p>
                <p className="text-sm text-gray-500 mb-6">*Price per person on twin sharing basis</p>
                
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-all duration-300 mb-4 shadow-sm"
                >
                  Book Now
                </button>
                
                <a 
                  href={`mailto:info@wonderlandholidays.com?subject=Inquiry about ${selectedTour.name}&body=Hi, I'm interested in learning more about ${selectedTour.name}.`}
                  className="w-full block text-center border border-indigo-600 text-indigo-600 py-3 rounded-md font-medium hover:bg-indigo-50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    <FiMail className="mr-2" />
                    <span>Send Inquiry</span>
                  </div>
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Tour Details:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCalendar className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Duration</span>
                      <span className="text-gray-600">{selectedTour.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiUsers className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Group Size</span>
                      <span className="text-gray-600">Max {selectedTour.groupSize || 12} people</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiMapPin className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Destinations</span>
                      <span className="text-gray-600">{selectedTour.location || 'Multiple locations'}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiMap className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Tour Type</span>
                      <span className="text-gray-600">{selectedTour.tourType || 'Guided Tour'}</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Included in the Price:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Transportation</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">English speaking guide</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Entrance fees</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Daily breakfast</span>
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
      
      {/* Similar Tours */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Similar Tours</h2>
          <p className="text-gray-600 mb-8 text-center">You might also be interested in these tours</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter(tour => tour.id !== selectedTour.id)
              .slice(0, 3)
              .map(tour => (
                <motion.div 
                  key={tour.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                        {tour.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{tour.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      {tour.location && (
                        <>
                          <FiMapPin size={14} className="mr-1" />
                          <span>{tour.location}</span>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <FiStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-700">{tour.rating}</span>
                      </div>
                      <span className="text-indigo-600 font-bold">{tour.price}</span>
                    </div>
                    <a 
                      href={`/tour/${tour.id}`}
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
          selectedItem={selectedTour}
          itemType="tour"
        />
      )}
    </div>
  );
}
