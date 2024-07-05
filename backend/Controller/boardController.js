const { NotFoundError } = require('../util/error');
const { runTransaction } = require('../util/dbUtil');
const { serviceInifnityReplyData, serviceReplyCreate, serviceReplyDelete } = require('../service/boardService');

//인피니티 스크롤 로직 nextPage 꼭 리턴해줘야함 useInfinity 때문
const fetchReplyInfinityData = async (req, res, next) => {
    try {
        const { todayRepley_response, counter, response_database, nextPage } = await runTransaction(async (conn) => {
            return serviceInifnityReplyData(req, conn);
        });

        res.status(201).json({
            path: 'paging',
            todayReply: todayRepley_response[0].cnt,
            counter: counter,
            pageData: response_database,
            nextPage: nextPage,
        });
    } catch (error) {
        console.log(error);
        const err = new NotFoundError(error.message);
        next(err);
    }
    ``;
};

// 댓글 삭제
const deleteReply = async (req, res, next) => {
    const body = req.body;
    const token = req.headers.authorization.split(' ')[1] || undefined;

    try {
        const { isDeleted, isDeleted_key, counter } = await runTransaction((conn) => {
            return serviceReplyDelete(body, token, conn);
        });
        res.json({ message: '성공', isDeleted, isDeleted_key, counter });
    } catch (error) {
        const err = new NotFoundError(error.message);
        console.log(err);
        next(err);
    }
};

// 댓글 등록(관리자)
const createReplyAuth = async (req, res, next) => {
    const reqData = req.body;
    const page = 'admin';
    try {
        const { count, rows } = await runTransaction((conn) => {
            return serviceReplyCreate(reqData, page, conn);
        });

        res.status(201).json({
            path: 'board/reply',
            counter: count,
            resData: rows,
        });
    } catch (error) {
        console.log(error.message);
        const err = new NotFoundError(error.message);
        next(err);
    }
};

// 댓글 등록(사용자)
const createReply = async (req, res, next) => {
    const reqData = req.body;
    const requestRoleType = 'user';
    try {
        // replyHandler에 필요한 모든 인자 전달
        const { count, rows } = await runTransaction((conn) => {
            return serviceReplyCreate(reqData, requestRoleType, conn);
        });

        res.status(201).json({
            path: 'board/reply',
            counter: count,
            resData: rows,
        });
    } catch (error) {
        const err = new NotFoundError(error.message);
        console.log(err);
        next(error);
    }
};

module.exports = {
    fetchReplyInfinityData,
    createReplyAuth,
    deleteReply,
    createReply,
};
