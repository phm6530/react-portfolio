import { useMutation } from '@tanstack/react-query';
import { LoginRequestProps, LoginResponseProps } from '@type/AuthTypes';
import { toast } from 'react-toastify';
import { fetchLogin } from 'services/authService';

import useStore from 'store/zustandStore';

const useLogin = () => {
    const { login } = useStore(state => ({ login: state.userAuthLogin }));

    // 로그인 로직
    return useMutation<LoginResponseProps, Error, LoginRequestProps>({
        mutationFn: data => fetchLogin(data),
        onSuccess: ({ token }) => {
            toast.success('로그인 되었습니다.');

            // 로그인 상태 업데이트
            login(token);
        },
    });
};

export default useLogin;
