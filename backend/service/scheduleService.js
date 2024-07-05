// get Month schedule Data
const getScheduleData = async (req, conn) => {
    const { Year, month } = req.query;
    const sql = `
        SELECT 
        id, 
        work, 
        complete, 
        category,
        schedule_key, 
        DATE_FORMAT(schedule_date, '%Y-%m-%d') AS formatted_date, 
        important  
        FROM schedules 
        WHERE YEAR(schedule_date) = ? AND MONTH(schedule_date) = ?
                `;
    const [response] = await conn.query(sql, [Year, month]);
    const restResponseData = {};

    for (const item in response) {
        const data = response[item].formatted_date;
        if (!restResponseData[data]) {
            restResponseData[data] = []; // 해당날짜 없으면 만들기
        }
        restResponseData[data].push(response[item]);
    }

    const DdayArr = response.filter((e) => {
        return e.important === 2;
    });
    return { restResponseData, DdayArr };
};

// 업데이트서비스 데이터
const updateScheduleData = async (req, conn) => {
    const { work, schedule_key } = req.body;
    const sql = `update schedules set work = ? where schedule_key = ?`;
    return conn.query(sql, [work, schedule_key]);
};

// 스케줄 생성
const createScheduleData = (req, conn) => {
    const { schedule_date, work, category, schedule_key, important } = req.body;
    const sql = `insert into schedules(schedule_date , work , category,  schedule_key , important) value(?,?,?,?,?)`;

    return conn.query(sql, [schedule_date, work, category, schedule_key, important]);
};

const deleteScheduleData = (req, conn) => {
    const { schedule_key } = req.body;
    const sql = `delete from schedules where schedule_key = ?`;
    return conn.query(sql, [schedule_key]);
};

// 지금 타이머 상태 가져오기
const getMyStatusTime = async (conn) => {
    const sql = `select * from tasktimer where playing = 1;`;
    const [rows] = await conn.query(sql);

    const curMonthInCategoryTime = `
        SELECT category, date, SEC_TO_TIME(SUM(TIME_TO_SEC(TIMEDIFF(end_time, start_time)))) as totalTime
        FROM tasktimer
        WHERE playing = 0 
        GROUP BY category, date order by date;
        `;
    const [curData] = await conn.query(curMonthInCategoryTime);

    // 한국 일자
    const getKrTime = (date) => {
        return new Date(date.getTime() + 9 * 60 * 60 * 1000);
    };

    const categoryDailyTotals = curData.map((e) => ({
        ...e,
        date: getKrTime(e.date).toISOString().split('T')[0],
    }));

    conn.release();
    let newObj = null;

    if (!!rows[0]) {
        newObj = { ...rows[0], date: getKrTime(rows[0].date).toISOString().split('T')[0] };
    }

    return { categoryDailyTotals, newObj };
};

// timer Start
const createTimerStart = (req, conn) => {
    const { startTime, category, id, name } = req.body;
    const playing = 1;
    const sql = `
        insert into tasktimer(
            category , start_time,  user_id , date , playing
            ) value(?,?, ? , now(), ?);
        `;
    return conn.query(sql, [category, startTime, id, playing]);
};

// 타이머 stop
const updateTimerEnd = (req, conn) => {
    const { endTime } = req.body;
    const playing = 0;
    const sql = `
        UPDATE tasktimer 
        SET playing = ?, end_time = ? 
        WHERE playing = 1;
        `;
    return conn.query(sql, [playing, endTime]);
};

const toggleTastkComplete = (req, conn) => {
    const { schedule_key } = req.body;
    const sql = `update schedules set complete = Not complete where schedule_key = ?`;
    return conn.query(sql, [schedule_key]);
};

module.exports = {
    getScheduleData,
    updateScheduleData,
    getMyStatusTime,
    createTimerStart,
    createScheduleData,
    updateTimerEnd,
    deleteScheduleData,
    toggleTastkComplete,
};
