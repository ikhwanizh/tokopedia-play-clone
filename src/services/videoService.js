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
    // static async addVideo(image) {
    //     try {
    //         const video = new VideoModel({ id, imageUrl });
    //         const newVideo = await video.save();
    //         console.log('Video saved successfully!');
    //         return newVideo;
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }
}

module.exports = VideoService;