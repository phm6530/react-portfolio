const { NotFoundError } = require('../util/error');
const { runTransaction } = require('../util/dbUtil');
const scheduleService = require('../service/scheduleService');

// 초기 데이터 컨트롤러
const handleGetScheduleData = async (req, res, next) => {
    try {
        const { restResponseData, DdayArr } = await runTransaction(async (conn) => {
            return scheduleService.getScheduleData(req, conn);
        });
        res.json({ message: 'success', restResponseData, D_Day: DdayArr });
    } catch (error) {
        const err = new NotFoundError('에러입니다.');
        next(err);
    }
};

// 스케줄 생성
const handleCreateSchedule = async (req, res, next) => {
    try {
        const response = await runTransaction((conn) => {
            return scheduleService.createScheduleData(req, conn);
        });
        res.json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError('에러입니다.');
        next(err);
    }
};

// 스케줄 업데이트
const handlePatchSchedule = async (req, res, next) => {
    try {
        const response = await runTransaction((conn) => {
            return scheduleService.updateScheduleData(req, conn);
        });
        res.json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError('에러입니다.');
        next(err);
    }
};

// 스케줄 삭제
const handleDeleteSchedule = async (req, res, next) => {
    try {
        const response = await runTransaction((conn) => {
            return scheduleService.deleteScheduleData(req, conn);
        });
        res.json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

const handleTaskCompleteToggle = async (req, res, next) => {
    try {
        const response = runTransaction((conn) => {
            return scheduleService.toggleTastkComplete(req, conn);
        });
        res.json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

const handleMyStatusTimer = async (_, res, next) => {
    try {
        const { categoryDailyTotals, newObj } = await runTransaction(async (conn) => {
            return scheduleService.getMyStatusTime(conn);
        });
        res.json({ message: 'success', timerData: newObj, categoryDailyTotals });
    } catch (error) {
        await conn.rollback();
        const err = new NotFoundError(error.message);
        next(err);
    }
};

const handleTimerstart = async (req, res, next) => {
    try {
        const response = await runTransaction((conn) => {
            return scheduleService.createTimerStart(req, conn);
        });
        res.json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

const handleTimerend = async (req, res, next) => {
    try {
        const response = await runTransaction((conn) => {
            return scheduleService.updateTimerEnd(req, conn);
        });
        res.status(200).json({ message: 'success', databaseInsert: response.affectedRows });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

module.exports = {
    handleGetScheduleData,
    handleCreateSchedule,
    handlePatchSchedule,
    handleDeleteSchedule,
    handleTaskCompleteToggle,
    handleMyStatusTimer,
    handleTimerstart,
    handleTimerend,
};
