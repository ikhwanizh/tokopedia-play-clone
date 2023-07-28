let videos = [
    {

    }
]

class VideoRepository {
    constructor(id, title, imageUrl, ){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
    }
    static getAllVideos(){
        return videos;
    }
    static getVideoById(id){
        return videos.find(video => video.id === id);
    }
    static addVideo(video){
        videos.push(video);
    }
    static updateVideo(video){
        let index = videos.findIndex(v => v.id === video.id);
        videos[index] = video;
    }
    static deleteVideo(id){
        videos = videos.filter(video => video.id !== id);
    }
}