const searchFilter = (arr, searchParam) => {
    const searchFilter = arr.filter((item) => {
        return item.title.toLocaleLowerCase().includes(searchParam);
    });
    return searchFilter;
};

const queryStringFilter = (data, filterText, itemParam) => {
    let filterData;
    if (filterText === 'all') {
        filterData = data;
    } else {
        filterData = data.filter((item) => {
            return item.cateGory === filterText && item.item === itemParam;
        });
    }
    return filterData;
};

module.exports = {
    searchFilter,
    queryStringFilter,
};
