import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { fetchMailHandler } from 'services/contactService';

const useMail = () => {
    return useMutation({
        mutationFn: fetchMailHandler,
        onSuccess: () => {
            toast.success('메일 전송이 완료되었습니다.');
        },
    });
};

export default useMail;
