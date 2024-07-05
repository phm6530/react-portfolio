import React, { useEffect, useRef, useState } from 'react';
import BoardComment from '@features/Board/BoardComment/BoardComment';

import FadeInAnimation from 'component/animations/FadeInAnimation';
import BoardCommentStatus from '@features/Board/BoardCommentStatus/BoardCommentStatus';
import useCommentInfinity from 'features/Board/hooks/useCommentInfinity';
import { SpinnerLoading } from 'component/loading/SpinnerLoading';
import { format } from 'date-fns';
import {
    FirstDayStyle,
    BoardReplyWrap,
} from '@features/Board/BoardCommentList/BoardCommentListStyle';

const BoardCommentList = (): JSX.Element => {
    const {
        data: infinityData,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isError,
    } = useCommentInfinity();

    const [selectIdx, setSelectIdx] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    // 중복제거
    const dateSet = new Set();

    const isFirstDate = (date: string) => {
        if (!dateSet.has(date)) {
            dateSet.add(date);
            return true;
        }
        return false;
    };

    useEffect(() => {
        const targetItem = ref.current;
        if (!hasNextPage || !targetItem) return;

        const callback = async (entry: IntersectionObserverEntry[]) => {
            if (entry[0].isIntersecting) {
                fetchNextPage();
            }
        };

        const io = new IntersectionObserver(callback, {
            threshold: 0.5,
        });
        if (targetItem) {
            io.observe(targetItem);
        }
        return () => io.unobserve(targetItem);
    }, [ref, fetchNextPage, infinityData, hasNextPage]);

    if (isLoading) {
        return (
            <>
                <SpinnerLoading />
            </>
        );
    }

    if (isError) {
        return <>Error</>;
    }

    return (
        <BoardReplyWrap>
            {/* 오늘 댓글 + 전체댓글  */}

            {infinityData && (
                <BoardCommentStatus
                    todayReply={infinityData.pages[0].todayReply}
                    total={infinityData.pages[0].counter}
                />
            )}
            {/* 뿌리기 */}
            {infinityData?.pages.map((page, idx) => {
                const lastPage = idx === infinityData.pages.length - 1;

                return page.pageData.map((item, idx) => {
                    const lastItem =
                        lastPage && idx === page.pageData.length - 1;

                    const date = item.date.split(' ')[0];
                    const firstData = isFirstDate(date);

                    const arrayFromSet = Array.from(dateSet);
                    const firstDateDiv = arrayFromSet[0] === date;

                    return (
                        <div key={item.board_key}>
                            {firstData && (
                                <FirstDayStyle $first={firstDateDiv}>
                                    <span>{format(date, 'yyyy. MM. dd')}</span>
                                </FirstDayStyle>
                            )}
                            <FadeInAnimation>
                                <BoardComment
                                    ref={lastItem ? ref : null}
                                    item={item}
                                    role={item.role}
                                    selectIdx={selectIdx === item.board_key}
                                    setSelectIdx={setSelectIdx}
                                />
                            </FadeInAnimation>
                        </div>
                    );
                });
            })}
        </BoardReplyWrap>
    );
};

export default BoardCommentList;
