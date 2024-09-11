const moongose = require('mongoose');

const productSchema = new moongose.Schema({
    id: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    stock: [
        {
            size: String,
            quantity: Number,
        },
    ],
    images: {type: [String], required: true},
    date: {type: Date, default: Date.now},
});

const Product = moongose.model('Product', productSchema);
module.exports = Product;