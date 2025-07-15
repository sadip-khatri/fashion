import React from 'react';
import { products } from '../data/products';
import ProductGrid from './ProductGrid';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest clothing from all categories
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;