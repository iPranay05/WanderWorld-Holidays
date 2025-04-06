'use client';

import React from 'react';
import { aboutContent } from '@/data/about';

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Wanderworld Holidays</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Your trusted partner for extraordinary travel experiences in India</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">{aboutContent.mission}</p>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="fas fa-compass text-emerald-600 text-2xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed">{aboutContent.history}</p>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="fas fa-history text-emerald-600 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutContent.team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden team-card">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="team-overlay">
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-emerald-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
          <p className="mb-6 max-w-3xl mx-auto">We're always looking for passionate individuals to join our team. If you love travel and want to help others experience the magic of India, we'd love to hear from you.</p>
          <button className="bg-white text-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer">
            View Careers
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .team-card {
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 150, 105, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .team-card:hover .team-overlay {
          opacity: 1;
        }
        .social-icons {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #059669;
          font-size: 18px;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.1);
          background: #f3f4f6;
        }
      `}</style>
    </section>
  );
};

export default About;
