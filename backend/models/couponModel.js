const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount_percentage: { type: Number, required: true },
    expiration_date: { type: Date, required: true },
  });
  
const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;  