import { tokenCheck } from 'services/authService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useAuthStorage } from '@features/auth/useAuthStorage';
import useStore from 'store/zustandStore';

// 서버 + 클라 체크
const useCheckPermission = () => {
    const { logout, auth } = useStore(state => ({
        logout: state.userAuthLogout,
        auth: state.userAuth.login,
    }));
    const storageHelper = useAuthStorage();
    const throttle = useRef<boolean>(false);

    const { mutateAsync } = useMutation({
        mutationFn: tokenCheck,
    });

    const permissionHandler = async () => {
        if (throttle.current) return;
        throttle.current = true;
        try {
            if (!auth) {
                toast.error('로그인을 해주세요');
                return false;
            }
            const result = await mutateAsync();
            return result;
        } catch (error) {
            storageHelper.removeUserData();
            logout();

            return false;
        } finally {
            setTimeout(() => {
                throttle.current = false;
            }, 1000);
        }
    };

    return permissionHandler;
};

export default useCheckPermission;
