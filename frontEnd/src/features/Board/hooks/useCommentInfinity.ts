import { BoardInfinityResponse } from '@type/BoardTypes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchReply } from 'services/boardService';
import { queryKey } from 'services/queryKey';

const useCommentInfinity = () => {
    return useInfiniteQuery<BoardInfinityResponse, Error>({
        queryKey: [queryKey.board],
        queryFn: ({ pageParam = 0 }) => fetchReply(pageParam as number),
        getNextPageParam: lastPage => lastPage.nextPage || undefined,
        initialPageParam: 0,
    });
};

export default useCommentInfinity;
