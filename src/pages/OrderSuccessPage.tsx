import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Phone } from 'lucide-react';

const OrderSuccessPage: React.FC = () => {
  const orderNumber = 'NF' + Date.now().toString().slice(-6);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="text-lg font-semibold text-purple-600">#{orderNumber}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Package className="h-5 w-5" />
              <span>Your order will be delivered within 3-5 business days</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Phone className="h-5 w-5" />
              <span>We'll call you to confirm delivery details</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium block"
            >
              Continue Shopping
            </Link>
            <Link
              to="/orders"
              className="w-full border border-purple-600 text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors font-medium block"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;