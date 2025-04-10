'use client';

import Image from 'next/image';
import React from 'react';
import { contactInfo } from '@/data/contact';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/LOGO!.png" alt="Wonderland Holidays" width={120} height={40} className="object-contain" />
            </div>
            <p className="text-gray-600 mb-6">Your trusted partner for extraordinary travel experiences in India.</p>
            <div className="flex space-x-3">
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
                <FiFacebook size={16} />
              </a>
              <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
                <FiTwitter size={16} />
              </a>
              <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
                <FiInstagram size={16} />
              </a>
              <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <div className="w-12 h-0.5 bg-indigo-600 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Destinations</span>
                </a>
              </li>
              <li>
                <a href="#tours" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Tours</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Packages</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Popular Destinations</h3>
            <div className="w-12 h-0.5 bg-indigo-600 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Rajasthan</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Kerala</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Goa</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Himachal Pradesh</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  <FiChevronRight size={14} className="mr-2 text-indigo-500" />
                  <span>Andaman</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Us</h3>
            <div className="w-12 h-0.5 bg-indigo-600 mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wonderland Holidays. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            Wonderland Holidays is a registered trademark. All images and content are for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
