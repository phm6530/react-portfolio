const PercentCalculator = arr => {
    const completeTask = arr.filter(e => {
        return e.complete;
    });

    const totalCount = arr.length;
    const completeCount = completeTask.length;

    const result = Math.floor((completeCount / totalCount) * 100);

    return {
        result,
        completeCount,
    };
};

export { PercentCalculator };
