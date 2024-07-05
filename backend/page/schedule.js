const express = require('express');
const router = express.Router();

const schedule = require('node-schedule');
const scheudleController = require('../Controller/scheduleController');

// DB연결
const db = require('../util/config');

const ScheduleRouter = (wss) => {
    // 이번달 데이터 가져오기
    router.get('/', scheudleController.handleGetScheduleData);

    // 스케줄생성
    router.post('/add', scheudleController.handleCreateSchedule);

    // 스케줄 업데이트
    router.post('/edit', scheudleController.handlePatchSchedule);

    // 스케줄 삭제
    router.post('/delete', scheudleController.handleDeleteSchedule);

    // Complete Toggle
    router.post('/complete', scheudleController.handleTaskCompleteToggle);

    // 내 상태 타이머
    router.get('/timer', scheudleController.handleMyStatusTimer);

    // 타이머 스타트
    router.post('/timeraction', scheudleController.handleTimerstart);

    // 타이머 정지
    router.post('/timerEnd', scheudleController.handleTimerend);

    // 타이머 12시 초기화 로직
    const timerRestart = async (ws) => {
        // 데이터베이스 연결 가져오기 (트랜잭션 시작 전)
        const conn = await db.getConnection();

        try {
            await conn.beginTransaction(); // 트랜잭션 시작

            const selectSql = `SELECT * FROM tasktimer WHERE playing = 1`;
            const [playTimer] = await conn.query(selectSql);

            if (!!playTimer[0]) {
                const { id, category, user_id } = playTimer[0];
                console.log(id);
                // console.log('연결');
                const updateSql = `UPDATE tasktimer SET playing = 0, end_time = '23:59:59' WHERE id = ?`;
                const [updateResponse] = await conn.query(updateSql, [id]);
                if (updateResponse.affectedRows === 1) {
                    const insertSql = `
                        INSERT INTO tasktimer(category, start_time, user_id, date, playing)
                        VALUES (?, '00:00:00', ?, CURDATE(), 1);
                    `;
                    const insertResponse = await conn.query(insertSql, [category, user_id]);

                    if (insertResponse.affectedRows === 0) {
                        throw new Error('업데이트가 처리되지 않았습니다.');
                    }
                }

                await conn.commit(); // 트랜잭션 커밋

                console.log('타이머 갱신함');

                // 웹소켓에서는 JSON, XML를 가정하지않기때문에 JSOn.stringfly해서 보내야댐
                ws.clients.forEach((client) => {
                    client.send(
                        JSON.stringify({ status: 'success', message: '타이머가 갱신 되었습니다..', timerSet: true }),
                    );
                });
            } else {
                console.log('타이머 갱신할게없네요');
                ws.clients.forEach((client) => {
                    client.send(
                        JSON.stringify({ status: 'success', message: '갱신할 타이머가 없습니다.', timerSet: false }),
                    );
                });
            }
        } catch (error) {
            await conn.rollback(); // 에러 발생 시 롤백
            ws.send(JSON.stringify({ status: 'error', message: error.message }));
        } finally {
            conn.release(); // 연결 해제
        }
    };

    // 매일 자정으로 변경
    schedule.scheduleJob('0 0 * * *', () => {
        timerRestart(wss);
    });

    wss.on('connection', () => {
        console.log('웹소켓 연결');
    });

    return router;
};

module.exports = ScheduleRouter;
