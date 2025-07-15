import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover
              <span className="block text-yellow-300">Complete Fashion</span>
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-lg">
              From traditional wear to modern fashion - complete clothing collection for everyone
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/categories"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sale"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Sale Collection
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Free Shipping over NPR 5,000</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                alt="Complete Fashion Collection"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-purple-900 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">200+ Products</p>
                <p className="text-sm">All Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;