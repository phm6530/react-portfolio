const fetchTimerSetting = async () => {
    // 현재시간
    const response = await fetch('http://localhost:8080/schedule/timer');
    if (!response.ok) {
        throw new Error('에러');
    }
    return response.json();
};

const fetchTimerStart = async Data => {
    // 현재시간
    const response = await fetch(`http://localhost:8080/schedule/timeraction`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });
    if (!response.ok) {
        throw new Error('에러');
    }

    return await response.json();
};

const fetchTimerEnd = async Data => {
    // 현재시간
    const response = await fetch(`http://localhost:8080/schedule/timerEnd`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });

    if (!response.ok) {
        throw new Error('에러???');
    }

    return await response.json();
};

export { fetchTimerSetting, fetchTimerStart, fetchTimerEnd };
