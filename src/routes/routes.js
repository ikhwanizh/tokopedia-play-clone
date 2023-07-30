const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');
const ProductController = require('../controllers/productController');
const CommentController = require('../controllers/commentController');

//Video
router.get('/videos', VideoController.getAllVideos);
router.post('/videos', VideoController.addVideo);

//Product
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.addProduct);
router.get('/products/:videoId', ProductController.getProductsByVideoId);

//Comment List
router.get('/comments', CommentController.getAllComments);
router.get('/comments/:videoId', CommentController.getCommentsByVideoId);
router.post('/comments', CommentController.addComment);

module.exports = router;