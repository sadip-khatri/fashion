const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: Number,
  images: [String],
  description: String,
  category: String,
  sizes: [String],
  colors: [String],
  inStock: Boolean,
  featured: Boolean
});

module.exports = mongoose.model('Product', productSchema);