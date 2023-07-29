const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('videos', videoSchema);