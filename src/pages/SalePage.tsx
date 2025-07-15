import React, { useState } from 'react';
import { Clock, Tag, Percent } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

const SalePage: React.FC = () => {
  const [sortBy, setSortBy] = useState('discount');

  // Filter products that have original prices (on sale)
  const saleProducts = products.filter(product => product.originalPrice);

  // Add discount calculation to products
  const saleProductsWithDiscount = saleProducts.map(product => ({
    ...product,
    discount: product.originalPrice 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0
  }));

  // Sort products
  const sortedProducts = [...saleProductsWithDiscount].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-12 w-12 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold">MEGA SALE</h1>
            </div>
            <p className="text-xl lg:text-2xl text-red-100 mb-6">
              Up to 70% OFF on Selected Items
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Limited Time Offer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Percent className="h-5 w-5" />
                <span>Best Prices Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">{saleProducts.length}</div>
              <div className="text-gray-600">Items on Sale</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">Up to 70%</div>
              <div className="text-gray-600">Maximum Discount</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">Free</div>
              <div className="text-gray-600">Shipping on Sale Items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sale Items</h2>
            <p className="text-gray-600 mt-2">{sortedProducts.length} products on sale</p>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="discount">Highest Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        {/* Sale Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Traditional Sale</h3>
            <p className="text-sm opacity-90">Up to 50% OFF</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Bridal Collection</h3>
            <p className="text-sm opacity-90">Up to 40% OFF</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Casual Wear</h3>
            <p className="text-sm opacity-90">Up to 60% OFF</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Party Dresses</h3>
            <p className="text-sm opacity-90">Up to 70% OFF</p>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <div className="text-center py-12">
            <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Sale Items Available</h3>
            <p className="text-gray-500">Check back soon for amazing deals!</p>
          </div>
        )}

        {/* Sale Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
          <p className="text-lg mb-6">
            These amazing deals won't last forever. Shop now and save big on authentic Nepali fashion.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Limited Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;