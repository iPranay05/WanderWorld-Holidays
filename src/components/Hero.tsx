'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  setShowContact: (show: boolean) => void;
  setShowPackages: (show: boolean) => void;
  setShowAbout: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  setShowContact,
  setShowPackages,
  setShowAbout
}) => {
  return (
    <div className="relative pt-16" style={{ height: '600px' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <img
              src="https://public.readdy.ai/ai/img_res/ffd3af1c69ecd2b91d5075d676f918aa.jpg"
              alt="India Landmarks"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Discover India's Magic</h1>
                <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">Experience the beauty, culture and adventure of incredible India with our curated travel experiences.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('destinations');
                    }}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Explore Destinations
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('contact');
                      setShowContact(true);
                      setShowPackages(false);
                      setShowAbout(false);
                    }}
                    className="bg-white text-emerald-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <img
              src="https://public.readdy.ai/ai/img_res/c56e02020387475d021c159dfd666c33.jpg"
              alt="Kerala Backwaters"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Explore Serene Backwaters</h1>
                <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">Cruise through the tranquil backwaters of Kerala and experience the beauty of God's own country.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('destinations');
                    }}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Explore Destinations
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('contact');
                      setShowContact(true);
                      setShowPackages(false);
                      setShowAbout(false);
                    }}
                    className="bg-white text-emerald-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <img
              src="https://public.readdy.ai/ai/img_res/28183aaecedab0355f269ea0f430eefe.jpg"
              alt="Himalayan Mountains"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Adventure in the Himalayas</h1>
                <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">Embark on thrilling adventures in the majestic Himalayan mountains of India.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('destinations');
                    }}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Explore Destinations
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab('contact');
                      setShowContact(true);
                      setShowPackages(false);
                      setShowAbout(false);
                    }}
                    className="bg-white text-emerald-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
