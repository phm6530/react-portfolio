const jwt = require('jsonwebtoken');
const { compare } = require('bcrypt');
const { passwordHashing } = require('../util/auth');
const boardController = require('../models/boardModel');

// 댓글 인피니티 스크롤
const serviceInifnityReplyData = async (req, conn) => {
    const idx = +req.params.idx;
    const LIMIT = 10;
    const boardModel = boardController.InfinityReplyDataModel(conn);

    //[model] 초기단락 및 10개씩 가져옴
    const responseBoardList = await boardModel.getBoardList(LIMIT, idx);
    const [todayRepley_response] = await boardModel.getTodayCommentCounter(conn);

    let counter = null;
    // 첫 페이지 요청 시에만 전체 카운트 전송
    if (idx === 0) {
        counter = await boardModel.getTotalCommentCounter(conn);
    }

    const nextPage = responseBoardList.length === LIMIT ? idx + 1 : null;
    return { todayRepley_response, counter, response_database: responseBoardList, nextPage };
};

// 댓글 등록 서비스
const serviceReplyCreate = async (reqData, requestRoleType, conn) => {
    const { userIcon, userName, contents, idx, password = null } = reqData;
    const limit = 1;
    const boardModel = boardController.InfinityReplyDataModel(conn);

    let hashedPassword = undefined;
    let role = 0;

    // 일반 사용자의 경우 비밀번호 해싱 처리
    if (requestRoleType !== 'admin' && password) {
        hashedPassword = await passwordHashing(password);
    } else {
        role = 'admin';
    }
    let req_sql = `
                INSERT INTO 
                board (user_icon, user_name, user_password, contents, role , board_key, date) 
                VALUES (?, ?, ?, ?, ? , ?, NOW())`;

    await conn.query(req_sql, [userIcon, userName, hashedPassword, contents, role, idx]);

    let res_sql = `
                SELECT idx, user_icon, user_name, contents, board_key, date , role
                FROM board ORDER BY idx DESC LIMIT ?`;

    const [rows] = await conn.query(res_sql, [limit]);
    const count = await boardModel.getTotalCommentCounter(conn);
    return { count, rows };
};

// 댓글삭제 로직
const serviceReplyDelete = async ({ reply_password, board_key, auth }, token, conn) => {
    const sql_ReplyFind = `select * from board where board_key = ? `;
    const [boardRecord] = await conn.query(sql_ReplyFind, [board_key]);

    if (!boardRecord || boardRecord.length === 0) {
        throw new Error('이미 삭제되었거나 서버에 문제가 있습니다.');
    }

    // 인증된 사용자면 토큰 검사해서 삭제하고 아니면 비번 검사하기
    if (auth) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('유효하지 않은 토큰입니다.');
        }
    } else {
        const isMatch = await compare(reply_password, boardRecord[0].user_password);
        if (!isMatch) {
            throw new Error('비밀번호가 맞지않습니다.');
        }
    }

    const sql_delete = `delete from board where board_key = ? `;
    const deleteResult = await conn.query(sql_delete, [board_key]);

    const isDeleted = deleteResult.affectedRows > 0;

    const sql_cnt = `select count(*) as cnt from board`;
    const [counter] = await conn.query(sql_cnt);

    return {
        isDeleted,
        isDeleted_key: board_key,
        counter: counter[0].cnt,
    };
};

module.exports = {
    serviceInifnityReplyData,
    serviceReplyCreate,
    serviceReplyDelete,
};
