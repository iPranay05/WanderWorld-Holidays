'use client';

import React, { useState } from 'react';

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
    specialRequests: ''
  });

  const [step, setStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Generate a random booking number
      const randomBookingNumber = 'WH' + Math.floor(100000 + Math.random() * 900000);
      setBookingNumber(randomBookingNumber);
      setBookingComplete(true);
      
      // Here you would typically send the data to your backend
      console.log('Booking submitted:', {
        ...formData,
        item: selectedItem,
        itemType
      });
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
      specialRequests: ''
    });
    setStep(1);
    setBookingComplete(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {bookingComplete
                ? 'Booking Confirmed!'
                : `Book ${itemType === 'tour' ? 'Tour' : itemType === 'package' ? 'Package' : 'Destination'}`}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {bookingComplete ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Booking!</h3>
              <p className="text-gray-600 mb-4">Your booking has been confirmed and we've sent the details to your email.</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-1">Booking Reference:</p>
                <p className="text-xl font-bold text-emerald-600">{bookingNumber}</p>
              </div>
              <p className="text-gray-600 mb-6">Our team will contact you shortly to finalize the details.</p>
              <button
                onClick={resetForm}
                className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {selectedItem && (
                <div className="mb-6 flex items-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{selectedItem.name}</h3>
                    <p className="text-gray-600 mb-1">{selectedItem.duration}</p>
                    <p className="text-emerald-600 font-bold">{selectedItem.price}</p>
                  </div>
                </div>
              )}

              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Booking Steps:</h4>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                    1
                  </div>
                  <div className="h-1 w-12 bg-gray-200 mx-2"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                    2
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                        <select
                          id="adults"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                        <select
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          {[...Array(6)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Any special requirements or preferences..."
                      ></textarea>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step === 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-300 rounded-md whitespace-nowrap cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                      >
                        Next Step
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-300 rounded-md whitespace-nowrap cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                      >
                        Complete Booking
                      </button>
                    </>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
