import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBlogPost } from 'services/blogService';
import { queryKey } from 'services/queryKey';

const useBlogPostDelete = (postKey: string) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // 삭제요청
    const { mutate } = useMutation({
        mutationFn: () => deleteBlogPost(postKey),
        onSuccess: data => {
            toast.success('삭제되었습니다.');

            // 블로그 갱신
            queryClient.invalidateQueries({
                queryKey: [queryKey.blog],
            });

            // 카테고리 갱신
            queryClient.invalidateQueries({
                queryKey: [queryKey.blogCategory],
            });

            queryClient.invalidateQueries({
                queryKey: [queryKey.blogNewPostLIst],
            });

            navigate('/blog');
        },
    });
    return { mutate };
};

export default useBlogPostDelete;
