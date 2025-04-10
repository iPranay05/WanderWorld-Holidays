'use client';

import React from 'react';
import { aboutContent } from '@/data/about';
import { FiCompass, FiClock, FiLinkedin, FiTwitter, FiMail, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Wonderland Holidays</h2>
          <div className="w-16 h-1 bg-indigo-600 mt-2 mb-4 rounded-full"></div>
          <p className="text-gray-600">Your trusted partner for extraordinary travel experiences in India</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <FiCompass className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <FiClock className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our History</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{aboutContent.history}</p>
          </motion.div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Meet Our Team</h3>
          <div className="w-12 h-1 bg-indigo-600 mb-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutContent.team.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center gap-4 mb-4">
                    <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                      <FiLinkedin />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                      <FiTwitter />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                      <FiMail />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-indigo-600 text-sm font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-sm p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
          <p className="mb-6 max-w-3xl mx-auto">We're always looking for passionate individuals to join our team. If you love travel and want to help others experience the magic of India, we'd love to hear from you.</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center mx-auto">
            <FiBriefcase className="mr-2" />
            View Careers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
