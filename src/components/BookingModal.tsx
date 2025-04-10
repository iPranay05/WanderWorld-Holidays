'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiCheck, FiCalendar, FiUser, FiMail, FiPhone, FiMessageSquare, FiMapPin, FiCreditCard, FiLock, FiClock, FiUsers, FiSmartphone, FiGlobe, FiAtSign, FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
  itemType: 'tour' | 'package' | 'destination';
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
  itemType
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    adults: '2',
    children: '0',
    specialRequests: '',
    travelPreference: 'standard',
    pickupLocation: '',
    mealPreference: 'non-vegetarian',
    activities: [],
    accommodation: 'hotel',
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bank: '',
    travelInsurance: false,
    covidProtection: false
  });

  const [step, setStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  // Generate some available dates (in a real app, these would come from an API)
  useEffect(() => {
    if (isOpen) {
      const dates = [];
      const today = new Date();
      
      for (let i = 10; i < 60; i += 3) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      
      setAvailableDates(dates);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setIsProcessing(true);
      
      // Simulate API call
      setTimeout(() => {
        // Generate a random booking number
        const randomBookingNumber = 'WH' + Math.floor(100000 + Math.random() * 900000);
        setBookingNumber(randomBookingNumber);
        setBookingComplete(true);
        setIsProcessing(false);
        
        // Here you would typically send the data to your backend
        console.log('Booking submitted:', {
          ...formData,
          item: selectedItem,
          itemType
        });
      }, 2000);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      adults: '2',
      children: '0',
      specialRequests: '',
      travelPreference: 'standard',
      pickupLocation: '',
      mealPreference: 'non-vegetarian',
      activities: [],
      accommodation: 'hotel',
      paymentMethod: 'card',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      upiId: '',
      bank: '',
      travelInsurance: false,
      covidProtection: false
    });
    setStep(1);
    setBookingComplete(false);
    setIsProcessing(false);
    onClose();
  };

  if (!isOpen) return null;

  const calculateTotal = () => {
    const basePrice = parseInt(selectedItem?.price?.replace(/[^0-9]/g, '') || '0');
    const adultTotal = basePrice * parseInt(formData.adults);
    const childTotal = basePrice * 0.7 * parseInt(formData.children);
    
    let upgradePrice = 0;
    if (formData.travelPreference === 'premium') {
      upgradePrice = 5000;
    } else if (formData.travelPreference === 'luxury') {
      upgradePrice = 12000;
    }
    
    return adultTotal + childTotal + upgradePrice;
  };

  const formatPrice = (price: number) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 rounded-t-xl">
            <div className="flex justify-between items-center p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {bookingComplete
                  ? 'Booking Confirmed!'
                  : `Book ${itemType === 'tour' ? 'Tour' : itemType === 'package' ? 'Package' : 'Destination'}`}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 focus:outline-none h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          <div className="p-6">
            {bookingComplete ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Booking!</h3>
                <p className="text-gray-600 mb-4">Your booking has been confirmed and we've sent the details to your email.</p>
                
                <div className="bg-indigo-50 p-6 rounded-lg mb-6 text-left">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Booking Reference:</p>
                      <p className="text-xl font-bold text-indigo-600">{bookingNumber}</p>
                    </div>
                    <div className="bg-white p-3 rounded-full">
                      <FiCheck className="text-green-500" size={24} />
                    </div>
                  </div>
                  
                  <div className="border-t border-indigo-100 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Tour/Package:</span>
                      <span className="font-medium">{selectedItem?.name}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">{formData.adults} Adults, {formData.children} Children</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-bold text-indigo-600">{formatPrice(calculateTotal())}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FiClock className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Our team will contact you within 24 hours to confirm your booking details.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={resetForm}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                {selectedItem && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{selectedItem.name}</h3>
                            <div className="flex items-center text-gray-600 mb-1">
                              <FiMapPin size={14} className="mr-1" />
                              <span className="text-sm">{selectedItem.location || 'Various Locations'}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FiClock size={14} className="mr-1" />
                              <span className="text-sm">{selectedItem.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-indigo-600 font-bold">{selectedItem.price}</p>
                            <p className="text-xs text-gray-500">per person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Booking Steps:</h4>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                      1
                    </div>
                    <div className="relative flex-1 mx-2">
                      <div className={`h-1 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                      <div className="absolute -bottom-5 left-0 text-xs text-gray-500">Personal Info</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-indigo-600 text-white' : step > 2 ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200 text-gray-400'}`}>
                      2
                    </div>
                    <div className="relative flex-1 mx-2">
                      <div className={`h-1 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                      <div className="absolute -bottom-5 left-0 text-xs text-gray-500">Trip Details</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      3
                    </div>
                    <div className="absolute right-0 -bottom-5 text-xs text-gray-500">Payment</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiUser className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Rahul Sharma"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiMail className="text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="rahul@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : step === 2 ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiCalendar className="text-gray-400" />
                          </div>
                          <select
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="">Select a date</option>
                            {availableDates.map(date => (
                              <option key={date} value={date}>
                                {new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                              </option>
                            ))}
                          </select>
                        </div>
                        <p className="mt-1 text-xs text-green-600">✓ Available for instant booking</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiUsers className="text-gray-400" />
                            </div>
                            <select
                              id="adults"
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiUsers className="text-gray-400" />
                            </div>
                            <select
                              id="children"
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                              {[0, 1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="travelPreference" className="block text-sm font-medium text-gray-700 mb-1">Travel Preference</label>
                        <div className="relative">
                          <select
                            id="travelPreference"
                            name="travelPreference"
                            value={formData.travelPreference}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="standard">Standard Tour</option>
                            <option value="premium">Premium Tour (Private Guide)</option>
                            <option value="luxury">Luxury Experience</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMapPin className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            placeholder="Hotel name or address"
                            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700 mb-1">Accommodation Type</label>
                          <select
                            id="accommodation"
                            name="accommodation"
                            value={formData.accommodation}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="hotel">Standard Hotel</option>
                            <option value="premium">Premium Hotel</option>
                            <option value="luxury">Luxury Resort</option>
                            <option value="heritage">Heritage Property</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="mealPreference" className="block text-sm font-medium text-gray-700 mb-1">Meal Preference</label>
                          <select
                            id="mealPreference"
                            name="mealPreference"
                            value={formData.mealPreference}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="non-vegetarian">Non-Vegetarian</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="jain">Jain</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <FiMessageSquare className="text-gray-400" />
                          </div>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            rows={3}
                            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Any special requirements or preferences..."
                          ></textarea>
                        </div>
                      </div>

                      {/* Price Summary */}
                      <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Price Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">{formData.adults} Adults</span>
                            <span className="font-medium">{formatPrice(parseInt(selectedItem?.price?.replace(/[^0-9]/g, '') || '0') * parseInt(formData.adults))}</span>
                          </div>
                          {parseInt(formData.children) > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">{formData.children} Children</span>
                              <span className="font-medium">{formatPrice(parseInt(selectedItem?.price?.replace(/[^0-9]/g, '') || '0') * 0.7 * parseInt(formData.children))}</span>
                            </div>
                          )}
                          {formData.travelPreference === 'premium' && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Premium Tour Upgrade</span>
                              <span className="font-medium">{formatPrice(5000)}</span>
                            </div>
                          )}
                          {formData.travelPreference === 'luxury' && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Luxury Experience Upgrade</span>
                              <span className="font-medium">{formatPrice(12000)}</span>
                            </div>
                          )}
                          <div className="border-t border-indigo-100 pt-2 mt-2">
                            <div className="flex justify-between font-bold">
                              <span>Total</span>
                              <span className="text-indigo-600">{formatPrice(calculateTotal())}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-4">Booking Summary</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tour/Package:</span>
                            <span className="font-medium">{selectedItem?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Destination:</span>
                            <span className="font-medium">{selectedItem?.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Travel Date:</span>
                            <span className="font-medium">{formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : ''}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Guests:</span>
                            <span className="font-medium">{formData.adults} Adults, {formData.children} Children</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Travel Preference:</span>
                            <span className="font-medium">{formData.travelPreference === 'standard' ? 'Standard Tour' : formData.travelPreference === 'premium' ? 'Premium Tour' : 'Luxury Experience'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Accommodation:</span>
                            <span className="font-medium">{formData.accommodation === 'hotel' ? 'Standard Hotel' : formData.accommodation === 'premium' ? 'Premium Hotel' : formData.accommodation === 'luxury' ? 'Luxury Resort' : 'Heritage Property'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Meal Preference:</span>
                            <span className="font-medium">{formData.mealPreference === 'non-vegetarian' ? 'Non-Vegetarian' : formData.mealPreference === 'vegetarian' ? 'Vegetarian' : formData.mealPreference === 'vegan' ? 'Vegan' : 'Jain'}</span>
                          </div>
                          
                          <div className="border-t border-indigo-200 pt-3 mt-3">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Amount:</span>
                              <span className="text-indigo-600">{formatPrice(calculateTotal())}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <div className="flex">
                          <FiInfo className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-blue-800 mb-1">What happens next?</h5>
                            <p className="text-sm text-blue-700">Once you submit your booking request, our travel expert will contact you within 24 hours to confirm availability and arrange for payment. No payment is required at this stage.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <input
                          id="termsAndConditions"
                          name="termsAndConditions"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="termsAndConditions" className="ml-2 block text-sm text-gray-700">
                          I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                        </label>
                      </div>
                    </motion.div>
                  )}

                  <div className="mt-6 flex justify-between">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className={`${step === 1 ? 'ml-auto' : ''} ${isProcessing ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 flex items-center`}
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : step === 3 ? 'Complete Booking' : 'Next'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BookingModal;
