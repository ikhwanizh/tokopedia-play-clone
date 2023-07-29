const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');
const ProductController = require('../controllers/productController');
const CommentController = require('../controllers/commentController');

//Video
router.get('/videos', VideoController.getAllVideos);

//Product
router.get('/products', ProductController.getAllProducts);

//Comment List
router.get('/comments', CommentController.getAllComments);
router.post('/comments', CommentController.addComment);

module.exports = router;