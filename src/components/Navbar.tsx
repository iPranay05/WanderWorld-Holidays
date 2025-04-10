'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setShowPackages: (show: boolean) => void;
  setShowAbout: (show: boolean) => void;
  setShowContact: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  setShowPackages,
  setShowAbout,
  setShowContact
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/LOGO!.png" 
                alt="Wanderworld Holidays"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'home' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Home
            </Link>
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('destinations');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'destinations' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Destinations
            </a>
            <a
              href="#tours"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('tours');
                document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'tours' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Tours
            </a>
            <button
              onClick={() => {
                setActiveTab('packages');
                setShowPackages(true);
                setShowAbout(false);
                setShowContact(false);
                setTimeout(() => {
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'packages' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setShowAbout(true);
                setShowPackages(false);
                setShowContact(false);
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'about' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setShowContact(true);
                setShowPackages(false);
                setShowAbout(false);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === 'contact' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Contact
            </button>
          </div>
          
          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200">
              <FiSearch size={20} />
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' });
                setActiveTab('contact');
                setShowContact(true);
                setShowPackages(false);
                setShowAbout(false);
              }}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'home' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('destinations');
                setIsMenuOpen(false);
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'destinations' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              Destinations
            </a>
            <a
              href="#tours"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('tours');
                setIsMenuOpen(false);
                document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'tours' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              Tours
            </a>
            <button
              onClick={() => {
                setActiveTab('packages');
                setShowPackages(true);
                setShowAbout(false);
                setShowContact(false);
                setIsMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'packages' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setShowAbout(true);
                setShowPackages(false);
                setShowContact(false);
                setIsMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'about' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setShowContact(true);
                setShowPackages(false);
                setShowAbout(false);
                setIsMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'contact' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' });
                setActiveTab('contact');
                setShowContact(true);
                setShowPackages(false);
                setShowAbout(false);
                setIsMenuOpen(false);
              }}
              className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 mt-2"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
