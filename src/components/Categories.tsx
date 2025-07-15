import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Traditional',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    description: 'Authentic Nepali traditional wear'
  },
  {
    name: 'Formal',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    description: 'Professional business attire'
  },
  {
    name: 'Casual',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
    description: 'Comfortable everyday wear'
  },
  {
    name: 'Sports',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
    description: 'Athletic and workout gear'
  },
  {
    name: 'Winter',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    description: 'Warm winter clothing'
  },
  {
    name: 'Kids',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
    description: 'Clothing for children'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Find the perfect dress for every occasion</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;