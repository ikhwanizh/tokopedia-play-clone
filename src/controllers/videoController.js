const VideoService = require('../services/videoService');

class VideoController {
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