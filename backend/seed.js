const mongoose = require('mongoose');
const Product = require('./models/Product');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const productsData = require('./products.json');
  await Product.deleteMany();
  await Product.insertMany(productsData);
  console.log('Seeded products');
  process.exit();
}

seed();