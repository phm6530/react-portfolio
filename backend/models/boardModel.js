const { todayKoreaTime } = require('../util/timeUtil');

const InfinityReplyDataModel = (conn) => {
    return {
        //초기단락 및 10개씩 가져옴
        getBoardList: async (LIMIT, idx) => {
            const sql = `
            select 
                idx, user_icon, user_name, contents, board_key, date, role
            from 
                board 
            order by 
                idx desc limit ? offset ?
            `;
            const [responseBoardList] = await conn.query(sql, [LIMIT, idx * LIMIT]);
            return responseBoardList;
        },
        // 전체 댓글 카운터
        getTotalCommentCounter: async (conn) => {
            const count_sql = `select count(*) as cnt from board`;
            const [count_result] = await conn.query(count_sql);
            return count_result[0].cnt;
        },
        // 오늘 댓글 카운터
        getTodayCommentCounter: async (conn) => {
            const todayReplysql = `
                SELECT 
                    COUNT(*) AS cnt
                FROM 
                    board
                WHERE 
                    DATE(date) = ?
            `;
            const today = todayKoreaTime();
            return conn.query(todayReplysql, [today]);
        },
    };
};

module.exports = {
    InfinityReplyDataModel,
};
