import { useRef } from 'react';
import { toast } from 'react-toastify';
import useStore from 'store/zustandStore';

// 클라이언트 체크
const useAuthCheck = () => {
    const login = useStore(state => state.userAuth.login);
    const throttle = useRef(false);

    const checkHandler = () => {
        if (throttle.current) return;
        throttle.current = true;
        if (!login) {
            toast.warn('권한이 없습니다.');
        }
        setTimeout(() => {
            throttle.current = false;
        }, 1000);

        return login ? true : false;
    };

    return {
        checkHandler,
    };
};

export { useAuthCheck };
