const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }) // Schema constructor takes a second optional argument which is an object containing different properties of schema. One of them is timestamps which when set to true, 2 fields (createdAt and updatedAt) are created automatically in the schema.

mongoose.models = {}

module.exports = mongoose.model('user', userSchema);