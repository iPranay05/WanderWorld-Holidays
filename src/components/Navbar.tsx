'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
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
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'home' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'destinations' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'tours' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'packages' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'about' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'contact' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-500'} rounded-md whitespace-nowrap cursor-pointer`}
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
              }}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
            >
              Book Now
            </button>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-emerald-500 focus:outline-none rounded-md whitespace-nowrap cursor-pointer">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'home' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'destinations' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'tours' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'packages' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'about' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === 'contact' ? 'text-white bg-emerald-600' : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-500'} w-full text-left rounded-md whitespace-nowrap cursor-pointer`}
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
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
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
