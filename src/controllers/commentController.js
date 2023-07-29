const CommentService = require('../services/commentService');

class CommentController {
    static async getAllComments(req, res) {
        try {
            const allComments = await CommentService.getAllComments();
            res.status(200).json(allComments);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    static async addComment(req, res) {
        const { username, comment, videoId } = req.body;
        try {
            const newComment = await CommentService.addComment(username, comment, videoId);
            res.status(200).json(newComment);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = CommentController;