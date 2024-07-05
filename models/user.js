const mongoose = require('mongoose');
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        default: 18
    }
})

module.exports = mongoose.model('user',user_schema);