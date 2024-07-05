import { fetchLogout } from 'services/authService';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import useStore from 'store/zustandStore';

const useLogout = () => {
    const token = localStorage.getItem('token');
    const logout = useStore(state => state.userAuthLogout);

    return useMutation({
        mutationFn: () => {
            if (token !== null) {
                return fetchLogout(token);
            } else {
                return Promise.reject(new Error('No token found'));
            }
        },
        onSuccess: () => {
            logout();
            toast.info('로그아웃 되었습니다');
        },
    });
};

export default useLogout;
