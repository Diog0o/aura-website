const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true },
    images: [String],
    created_at: { type: Date, default: Date.now },
  });
  
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
  