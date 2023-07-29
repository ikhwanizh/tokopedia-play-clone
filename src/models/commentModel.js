const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    videoId: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('comments', commentSchema);