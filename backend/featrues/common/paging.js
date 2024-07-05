//페이징
const pageCalculator = (page) => {
    const limit = 9;
    const firstIdx = (page - 1) * limit;
    const lastIdx = limit * page;
    return { firstIdx, lastIdx };
};

const paging = (resultData, limit) => {
    const cnt = resultData.length;
    const paging = Math.ceil(cnt / limit);

    return {
        result: resultData.slice(firstIdx, lastIdx),
        paging,
    };
};

module.exports = {
    pageCalculator,
    paging,
};
