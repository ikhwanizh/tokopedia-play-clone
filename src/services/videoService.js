const Video = require('../models/videoModel');

class VideoService {
    static async getAllVideos() {
        try {
            const allVideos = await Video.find();
            return allVideos;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addVideo(title, year) {
        try {
            const video = new Video({ title, year });
            const newVideo = await video.save();
            console.log('Video saved successfully!');
            return newVideo;
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = VideoService;