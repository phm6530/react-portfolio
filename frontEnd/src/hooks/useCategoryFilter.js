import { useState, useMemo } from 'react';
import { format, subDays } from 'date-fns';

const useCategoryFilter = ({ listData, selectDay: day = null }) => {
    const [viewRage, setViewRage] = useState('today');

    const today = useMemo(() => {
        return new Date();
    }, []);

    const Day = useMemo(() => {
        return day ? new Date(day) : null;
    }, [day]);

    const targetDay = format(Day || today, 'yyyy-MM-dd');

    //선택날짜 ~
    let selectDateRange = [];

    //선택 날짜 task
    let selectedDates = [];

    const dateFilter = (arr, targetDay) => {
        return arr[targetDay] || [];
    };

    // const cateFilter = arr => {
    //     console.log(listData[targetDay]);
    // };

    if (viewRage === 'today') {
        selectedDates = dateFilter(listData, targetDay);
        selectDateRange.push(targetDay);
    } else {
        // 주간 일정 arr길이
        const arrLength = today.getDate();
        const weekDayArr = [...Array(arrLength)].map((_, idx) => {
            const dayCalculator = subDays(today, idx);
            return format(dayCalculator, 'yyyy-MM-dd');
        });

        let weekObj = weekDayArr.reduce((acc, cur) => {
            if (listData[cur]) {
                acc[cur] = listData[cur];
            }
            return acc;
        }, {});

        const values = Object.values(weekObj);

        selectDateRange.push(weekDayArr[weekDayArr.length - 1], weekDayArr[0]);
        values.forEach(e => {
            selectedDates.push(...e);
        });
    }

    //카테고리 필터링
    const newCategoryFilter = selectedDates.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const newCateGorys = Object.keys(newCategoryFilter);
    const categoryFilter = newCategoryFilter;
    const cateGorys = newCateGorys;

    return {
        cateGorys,
        selectDateRange,
        categoryFilter,
        setViewRage,
        viewRage,
    };
};

export default useCategoryFilter;
