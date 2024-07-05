import { BlogPostRequestProps } from '@type/BlogTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { blogPostAction } from 'services/blogService';
import { queryKey } from 'services/queryKey';

const useBlogPostAction = (pageType: string, postId: string) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<unknown, unknown, BlogPostRequestProps>({
        mutationFn: data => blogPostAction(data, pageType, postId),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.blogCategory],
            });
            queryClient.invalidateQueries({ queryKey: [queryKey.blog] });
            queryClient.invalidateQueries({
                queryKey: [queryKey.blogNewPostLIst],
            });

            toast.success('블로그 글이 포스팅되었습니다.');
            navigate('/blog?category=All');
        },
    });
};

export default useBlogPostAction;
