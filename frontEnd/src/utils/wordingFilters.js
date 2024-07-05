const filterWord = ['돼지', '뚱땡이'];

// 필터링 *** 로 변경하기
const filterBadWording = word => {
    const filteredWording = filterWord.reduce((filtering, badword) => {
        const regExp = new RegExp(badword, 'g');
        return filtering.replace(regExp, '*'.repeat(badword.length));
    }, word);
    return filteredWording;
};

// 욕설 있는지 찾기
const findForBadword = word => {
    const filter = filterWord.filter(badword => {
        return word.includes(badword);
    });

    if (filter.length > 0) {
        return false;
    }
    return true;
};

const scriptReplace = text => {
    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export { filterBadWording, findForBadword, scriptReplace };
