const VideoModel = require('../models/videoModel');

class VideoService {
    static async getAllVideos() {
        try {
            const allVideos = await VideoModel.find();
            return allVideos;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addVideo(imageUrl) {
        const id = generateId();
        try {
            const newVideo = await VideoModel.create({id, imageUrl});
            console.log('Video saved successfully!');
            return newVideo;
        }
        catch (err) {
            console.log(err);
        }
    }
}
function generateId() {
    return Math.floor(Math.random() * 1000000);
}

module.exports = VideoService;