const express = require('express');
const router = express.Router();
const Video = require('../models/videoModel');

router.post('/', async(req, res) => {
    const { title, year } = req.body;
    const video = new Video({ title, year });
    try {
        const newVideo = await video.save();
        res.status(201).json(newVideo);
        console.log('Video saved successfully!');
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;