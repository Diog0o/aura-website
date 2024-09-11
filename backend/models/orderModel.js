const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
      },
    ],
    total_price: { type: Number, required: true },
    status: { type: String, default: 'Processing' },
    shipping_address: {
      street: String,
      city: String,
      postal_code: String,
      country: String,
    },
    payment_status: { type: String, default: 'Pending' },
    created_at: { type: Date, default: Date.now },
  });
  
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;  