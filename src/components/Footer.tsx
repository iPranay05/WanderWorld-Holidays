'use client';

import Image from 'next/image';

import React from 'react';
import { contactInfo } from '@/data/contact';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Wanderworld Holidays" width={120} height={40} className="object-contain" />
            </div>
            <p className="text-gray-400 mb-4">Your trusted partner for extraordinary travel experiences in India.</p>
            <div className="flex space-x-4">
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            
            <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors duration-300">Destinations</a></li>
              <li><a href="#tours" className="text-gray-400 hover:text-white transition-colors duration-300">Tours</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors duration-300">Packages</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Rajasthan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kerala</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Goa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Himachal Pradesh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Andaman</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-emerald-500"></i>
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2 text-emerald-500"></i>
                <span className="text-gray-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-emerald-500"></i>
                <span className="text-gray-400">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wanderworld Holidays. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Wanderworld Holidays is a registered trademark. All images and content are for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
