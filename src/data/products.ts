import { Product } from '../types';

export const products: Product[] = [
  // Traditional Wear
  {
    id: '1',
    name: 'Elegant Red Sari Dress',
    price: 8500,
    originalPrice: 12000,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    description: 'Beautiful traditional red sari dress made from premium silk fabric. Perfect for special occasions and festivals.',
    category: 'Traditional',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Maroon'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Modern Kurta Set',
    price: 4500,
    images: [
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    description: 'Contemporary kurta set with elegant embroidery. Comfortable and stylish for daily wear.',
    category: 'Traditional',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Blue'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Wedding Lehenga',
    price: 25000,
    originalPrice: 35000,
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Stunning bridal lehenga with intricate gold embroidery and beadwork. Made for your special day.',
    category: 'Bridal',
    sizes: ['S', 'M', 'L'],
    colors: ['Gold', 'Red', 'Pink'],
    inStock: true,
    featured: true
  },

  // Casual Wear
  {
    id: '4',
    name: 'Cotton T-Shirt',
    price: 1200,
    originalPrice: 1800,
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg'
    ],
    description: 'Comfortable 100% cotton t-shirt perfect for everyday wear. Soft fabric with modern fit.',
    category: 'Casual',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    inStock: true
  },
  {
    id: '5',
    name: 'Denim Jeans',
    price: 3500,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
    ],
    description: 'Classic blue denim jeans with comfortable stretch. Perfect fit for all-day comfort.',
    category: 'Casual',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Blue'],
    inStock: true
  },
  {
    id: '6',
    name: 'Casual Hoodie',
    price: 2800,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    description: 'Cozy fleece hoodie with kangaroo pocket. Perfect for cool weather and casual outings.',
    category: 'Casual',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Maroon'],
    inStock: true
  },

  // Formal Wear
  {
    id: '7',
    name: 'Business Suit',
    price: 15000,
    originalPrice: 20000,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg'
    ],
    description: 'Professional business suit with tailored fit. Includes jacket and trousers. Perfect for office wear.',
    category: 'Formal',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Formal Shirt',
    price: 2200,
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
    ],
    description: 'Crisp cotton formal shirt with button-down collar. Essential for professional wardrobe.',
    category: 'Formal',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink', 'Gray'],
    inStock: true
  },
  {
    id: '9',
    name: 'Formal Trousers',
    price: 3200,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Tailored formal trousers with flat front design. Comfortable fit for office and formal events.',
    category: 'Formal',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black', 'Navy', 'Gray', 'Khaki'],
    inStock: true
  },

  // Party Wear
  {
    id: '10',
    name: 'Evening Gown',
    price: 12000,
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    description: 'Glamorous evening gown perfect for parties and special events. Flowing silhouette with elegant details.',
    category: 'Party',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Purple', 'Wine'],
    inStock: true
  },
  {
    id: '11',
    name: 'Cocktail Dress',
    price: 6500,
    originalPrice: 9000,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg'
    ],
    description: 'Stylish cocktail dress perfect for evening parties. Knee-length with sophisticated design.',
    category: 'Party',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Red', 'Gold', 'Silver'],
    inStock: true
  },

  // Sports Wear
  {
    id: '12',
    name: 'Athletic Track Suit',
    price: 4200,
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    description: 'Complete athletic track suit with moisture-wicking fabric. Perfect for workouts and sports.',
    category: 'Sports',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Gray', 'Blue'],
    inStock: true
  },
  {
    id: '13',
    name: 'Yoga Pants',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Flexible yoga pants with four-way stretch. Comfortable for yoga, gym, and casual wear.',
    category: 'Sports',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Purple'],
    inStock: true
  },
  {
    id: '14',
    name: 'Sports Bra',
    price: 1500,
    originalPrice: 2200,
    images: [
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    description: 'High-support sports bra with moisture-wicking technology. Perfect for intense workouts.',
    category: 'Sports',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
    inStock: true
  },

  // Winter Wear
  {
    id: '15',
    name: 'Winter Jacket',
    price: 8500,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
    ],
    description: 'Warm winter jacket with insulation. Water-resistant and windproof for cold weather protection.',
    category: 'Winter',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Brown', 'Green'],
    inStock: true
  },
  {
    id: '16',
    name: 'Wool Sweater',
    price: 3800,
    originalPrice: 5500,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg'
    ],
    description: 'Cozy wool sweater with classic design. Perfect for layering during cold months.',
    category: 'Winter',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Cream', 'Brown', 'Navy'],
    inStock: true
  },

  // Accessories
  {
    id: '17',
    name: 'Leather Belt',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    description: 'Genuine leather belt with metal buckle. Classic accessory for formal and casual wear.',
    category: 'Accessories',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true
  },
  {
    id: '18',
    name: 'Silk Scarf',
    price: 2500,
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Luxurious silk scarf with beautiful patterns. Perfect accessory for any outfit.',
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Red', 'Blue', 'Gold', 'Purple'],
    inStock: true
  },

  // Kids Wear
  {
    id: '19',
    name: 'Kids T-Shirt',
    price: 800,
    images: [
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    description: 'Soft cotton t-shirt for kids. Fun colors and comfortable fit for active children.',
    category: 'Kids',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    colors: ['Red', 'Blue', 'Yellow', 'Green'],
    inStock: true
  },
  {
    id: '20',
    name: 'Kids Dress',
    price: 1500,
    originalPrice: 2000,
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    description: 'Adorable dress for little girls. Perfect for parties and special occasions.',
    category: 'Kids',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: ['Pink', 'Purple', 'White', 'Blue'],
    inStock: true
  }
];

export const categories = [
  'All', 
  'Traditional', 
  'Casual', 
  'Formal', 
  'Party', 
  'Sports', 
  'Winter', 
  'Bridal', 
  'Accessories', 
  'Kids'
];