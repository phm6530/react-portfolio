const express = require('express');
const router = express.Router(); //라우터 연결
const { verify } = require('../util/auth');
const { validation_Reply } = require('../util/validate'); // 댓글 유효성 검사임
const boardController = require('../Controller/boardController');

// 댓글 삭제
router.post('/reply/delete', boardController.deleteReply);

// 댓글 등록 (관리자 / 사용자) 따로 구성함
router.post('/reply/auth', verify, validation_Reply, boardController.createReplyAuth);
router.post('/reply', validation_Reply, boardController.createReply);

// 초기로드 or 게시판 페이징
router.get('/:idx', boardController.fetchReplyInfinityData);

module.exports = router;
