import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'react-query/queryClient';
import { toast } from 'react-toastify';

import { addReply } from 'services/boardService';

const useCommentAdd = () => {
    // Query 뮤테이션
    const { mutate } = useMutation({
        mutationFn: (formData: object) => addReply(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['board'] });
            toast.success('댓글이 등록되었습니다.');
        },
    });
    return { mutate };
};

export default useCommentAdd;
