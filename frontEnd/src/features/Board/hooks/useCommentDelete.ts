import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'react-query/queryClient';
import { toast } from 'react-toastify';
import { deleteFetch } from 'services/boardService';

interface deleteData {
    board_key: string;
    reply_password?: string; //인증된 사용자의 경우 노필요
}

const useCommentDelete = () => {
    const { mutate } = useMutation({
        mutationFn: (data: deleteData) => deleteFetch(data),
        onSuccess: () => {
            toast.info('댓글이 삭제되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['board'] });
        },
    });
    return { mutate };
};

export default useCommentDelete;
