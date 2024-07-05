const pool = require('../util/configg');

//트랜잭션 로직
const runTransaction = async (callback) => {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        // 콜백 함수 실행
        const result = await callback(conn);

        await conn.commit(); // 트랜잭션 커밋
        return result;
    } catch (error) {
        if (conn) {
            await conn.rollback(); // 트랜잭션 롤백
        }
        throw error;
    } finally {
        if (conn) {
            conn.release(); // 커넥션 반환
        }
    }
};

//풀 연결 반환 로직
const getConn = async (callback) => {
    //연결
    const conn = await pool.getConnection();
    try {
        const result = await callback(conn);
        return result;
    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
};

module.exports = {
    getConn,
    runTransaction,
};
