const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: { type: Array },
    availableQuantity: { type: Number, required: true }
})

mongoose.models = {}

module.exports = mongoose.model('product', productSchema);