const VideoService = require('../services/videoService');

class VideoController {
    static async addVideo(req, res) {
        const { title, year } = req.body;
        try {
            const newVideo = await VideoService.addVideo(title, year);
            res.status(200).json(newVideo);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    static async getAllVideos(req, res) {
        try {
            const allVideos = await VideoService.getAllVideos();
            res.status(200).json(allVideos);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = VideoController;