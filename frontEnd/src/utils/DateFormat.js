const dateFormating = today => {
    const arrDay = ['일', '월', '화', '수', '목', '금', '토'];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    const hour = today.getHours();
    const minit = today.getMinutes();

    const dateFormating = [year, month, date].join('-');
    const wirteDay = arrDay[day];
    const writeTime = `${hour} : ${minit}`;

    return [dateFormating, wirteDay, writeTime];
};

export { dateFormating };
