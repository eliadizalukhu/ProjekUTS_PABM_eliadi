const mongoose = require('mongoose');

// Skema untuk produk
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// Model produk berdasarkan skema
const Product = mongoose.model('products ', productSchema);

module.exports = Product;
