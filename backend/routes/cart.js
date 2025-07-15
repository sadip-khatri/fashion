const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const router = express.Router();

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Get cart
router.get('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  res.json(cart || { items: [] });
});

// Add/update item
router.post('/', auth, async (req, res) => {
  const { productId, quantity, size, color } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = new Cart({ user: req.user.id, items: [] });
  const existing = cart.items.find(i => i.product.equals(productId) && i.size === size && i.color === color);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity, size, color });
  }
  await cart.save();
  res.json(cart);
});

// Update quantity
router.put('/', auth, async (req, res) => {
  const { productId, quantity, size, color } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  const item = cart.items.find(i => i.product.equals(productId) && i.size === size && i.color === color);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  item.quantity = quantity;
  await cart.save();
  res.json(cart);
});

// Remove item
router.delete('/', auth, async (req, res) => {
  const { productId, size, color } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  cart.items = cart.items.filter(i => !(i.product.equals(productId) && i.size === size && i.color === color));
  await cart.save();
  res.json(cart);
});

// Clear cart
router.delete('/clear', auth, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id });
  if (cart) {
    cart.items = [];
    await cart.save();
  }
  res.json(cart);
});

module.exports = router;