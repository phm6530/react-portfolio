const parametersAuth = (category, itemParam) => {
    const validCategories = new Set(DUMMY_DATA.map((item) => item.cateGory.toLowerCase()));
    const validItems = new Set(DUMMY_DATA.map((item) => item.item));

    const cateGoryList = ['react', 'next', 'scss', 'css'];

    // 입력 파라미터의 존재 여부 확인
    if (category !== 'all' && !validCategories.has(category.toLowerCase())) {
        throw new Error(`Invalid category: ${category}`);
    }

    if (itemParam && !cateGoryList.includes(itemParam.toLocaleLowerCase())) {
        throw new Error(`Invalid item parameter: ${itemParam}`);
    }
};

module.exports = {
    validateQuery,
};
