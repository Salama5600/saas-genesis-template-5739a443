
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            <span className="block">Build your business</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              faster than ever
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
            The all-in-one platform that helps startups and enterprises scale their operations 
            with powerful automation, analytics, and collaboration tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <span>Trusted by 10,000+ companies</span>
            <div className="flex gap-6 opacity-60">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
