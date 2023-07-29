const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');

router.post('/', VideoController.addVideo);

module.exports = router;