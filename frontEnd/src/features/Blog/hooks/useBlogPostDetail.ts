import { BlogPostDetailProps } from '@type/BlogTypes';
import { useQuery } from '@tanstack/react-query';
import { blogPostDetail } from 'services/blogService';
import { queryKey } from 'services/queryKey';

const useBlogPostDetail = (key: string) => {
    return useQuery<BlogPostDetailProps>({
        queryKey: [queryKey.blogDetail],
        queryFn: () => blogPostDetail(key),
        enabled: !!key,
    });
};

export default useBlogPostDetail;
