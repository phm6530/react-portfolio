const express = require('express');
const router = express.Router();

// 컨트롤러
const BlogController = require('../Controller/blogController');
const { blogUpload } = require('../config/fileUploadConfig');
const utilRouter = require('./utilRouter');

// 뷰어
router.get('/tab', BlogController.handleCategory); // 카테고리
router.get('/posts/newlist', BlogController.HandleNewPostList);
router.get('/posts/:page', BlogController.handleViewPostList);
router.post('/post', BlogController.handleCreatePost);

// 관련 카테고리 게시물
router.get('/posts/:id/related', BlogController.handlePostRelated);

// 디테일 + 컨트롤
router.get('/postdetail/:key', BlogController.handlelViewPost);
router.delete('/deletepost/:key', BlogController.HandleDeletePost);
router.patch('/modify/:id', BlogController.handleUpdatePost);

// post 이미지 업로더
router.post('/uploadimg/:key', blogUpload.single('image'), utilRouter.handleImgUploader);

module.exports = router;
