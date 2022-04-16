const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: { type: String, required: true, unique: true },
    usedId: { type: String, required: true },
    products: [{
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 }
    }], // This represents that products will be an array containing objects containing productId and quantity
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true })

mongoose.models = {}

module.exports = mongoose.model('order', orderSchema);