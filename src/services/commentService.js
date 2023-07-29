const CommentModel = require('../models/commentModel');

class CommentService {
    static async getAllComments() {
        try {
            const allComments = await CommentModel.find();
            return allComments;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addComment(username, comment,videoId) {
        const timestamp = generateTimestamp();
        console.log(timestamp);
        try {
            const newComment = await CommentModel.create({username, comment, timestamp, videoId});
            console.log('Comment saved successfully!');
            return newComment;
        }
        catch (err) {
            console.log(err);
        }
    }
}
function generateTimestamp() {
    const date = new Date();
    const timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return timestamp;
}

module.exports = CommentService;