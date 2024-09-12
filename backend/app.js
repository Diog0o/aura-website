const express = require('express');
const cors = require('cors');
const path = require('path');
// const productRoutes = require('./routes/productRoutes');
// const userRoutes = require('./routes/userRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const cartRoutes = require('./routes/cartRoutes');
// const couponRoutes = require('./routes/couponRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

//Routes
// app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/coupons', couponRoutes);
// app.use('/api/reviews', reviewRoutes);

module.exports = app;
