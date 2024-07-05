import { useQuery } from '@tanstack/react-query';
import { queryKey } from 'services/queryKey';
import { fetchNewPostlist } from 'services/blogService';
import { BlogNewPostListProps } from '@type/BlogTypes';

const useBlogNewPostList = () => {
    return useQuery<BlogNewPostListProps[]>({
        queryKey: [queryKey.blogNewPostLIst],
        queryFn: fetchNewPostlist,
        staleTime: 5 * 60 * 1000,
    });
};

export default useBlogNewPostList;
