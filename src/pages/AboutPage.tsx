import React from 'react';
import { Heart, Award, Users, Globe, Truck, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Products Sold', value: '50,000+', icon: Heart },
    { label: 'Cities Served', value: '25+', icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authentic Craftsmanship',
      description: 'Every piece is carefully crafted by skilled artisans who have inherited traditional techniques passed down through generations.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest fabrics and materials, ensuring each dress meets our high standards of quality and durability.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service and support to make your shopping experience exceptional.'
    },
    {
      icon: Globe,
      title: 'Cultural Heritage',
      description: 'We celebrate and preserve Nepali cultural heritage through fashion, bringing traditional elegance to modern wardrobes.'
    }
  ];

  const team = [
    {
      name: 'Sita Sharma',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      description: 'With over 20 years in fashion design, Sita founded Nepali Fashion to showcase the beauty of traditional Nepali clothing.'
    },
    {
      name: 'Raj Thapa',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      description: 'Raj ensures smooth operations and quality control, making sure every customer receives the best products and service.'
    },
    {
      name: 'Maya Gurung',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      description: 'Maya brings fresh perspectives to traditional designs, creating contemporary pieces that honor our cultural roots.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Nepali Fashion</h1>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto">
              Celebrating the rich heritage of Nepali culture through authentic, handcrafted fashion that bridges tradition and modernity.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008 in the heart of Kathmandu, Nepali Fashion began as a small family business with a big dream: to share the beauty and elegance of traditional Nepali clothing with the world.
                </p>
                <p>
                  Our journey started when our founder, Sita Sharma, noticed that authentic Nepali fashion was becoming increasingly difficult to find. Determined to preserve our cultural heritage, she began working with local artisans and tailors to create high-quality, traditional garments.
                </p>
                <p>
                  Today, we're proud to be Nepal's leading online destination for authentic traditional and contemporary fashion. We work directly with skilled craftspeople across Nepal, ensuring fair wages and preserving traditional techniques while creating beautiful, modern designs.
                </p>
                <p>
                  Every piece in our collection tells a story of Nepal's rich cultural heritage, from the intricate embroidery of our saris to the vibrant colors of our festival wear.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                alt="Traditional Nepali Fashion"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from design to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Nepali Fashion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            To preserve and celebrate Nepali cultural heritage through authentic, high-quality fashion while supporting local artisans and bringing the beauty of traditional Nepali clothing to customers worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6" />
              <span>Free Shipping Nationwide</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Heart className="h-6 w-6" />
              <span>Made with Love in Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about our story? We'd love to hear from you.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a
              href="tel:+977-9800000000"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Call Us: +977-9800000000
            </a>
            <a
              href="mailto:info@nepalifashion.com"
              className="inline-block border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium"
            >
              Email: info@nepalifashion.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;