// 한국날짜계산
const todayKoreaTime = () => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const koreaTime = new Date(utc + 3600000 * 9);

    return koreaTime.toISOString().split('T')[0];
};

module.exports = { todayKoreaTime };
