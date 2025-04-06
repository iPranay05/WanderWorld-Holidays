'use client';

import React, { useState } from 'react';
import { contactInfo } from '@/data/contact';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    destination: '',
    travelDate: '',
    adults: '2',
    children: '0'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        destination: '',
        travelDate: '',
        adults: '2',
        children: '0'
      });
    }, 3000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Reach out to us for personalized travel planning and inquiries</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">Get in Touch</h3>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Preferred Destination</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select Destination</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Goa">Goa</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Andaman">Andaman</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
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
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Tell us about your travel preferences and requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-emerald-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone-alt text-emerald-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-emerald-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-emerald-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 whitespace-pre-line">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">Connect With Us</h3>
              
              <div className="flex space-x-4 mb-6">
                <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href={contactInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 mb-4">Get the latest travel deals and updates directly in your inbox.</p>
                <div className="flex">
                  <input
                    type="email"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your email address"
                  />
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-md font-medium hover:bg-emerald-700 transition-all duration-300 rounded-md whitespace-nowrap cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
