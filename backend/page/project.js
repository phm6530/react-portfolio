const express = require('express');
const router = express.Router();
const path = require('path');

const projectController = require('../Controller/projectController');
const utilRouter = require('./utilRouter');
const { blogUpload } = require('../config/fileUploadConfig');

// Project리스트
router.get('/', projectController.handleFetchProjectList);

// Project 수정 페이지 Fetch
router.get('/edit/:key', projectController.handleFetchProjectEdit);
router.post('/action', projectController.handleActionProject);

// Project 삭제
router.delete('/delete/:key', projectController.handleDeleteProject);

// 썸네일 업로드 + 에디터 사진 업로드
router.post('/uploadimg/:key', blogUpload.single('image'), utilRouter.handleImgUploader);

// Project 리스트 Detila
router.get('/:key', projectController.handleFetchProjectDetail);

// Project Prev, Next Detila List
router.get('/nextprev/:key', projectController.handleFetchPrevNext);

module.exports = router;
