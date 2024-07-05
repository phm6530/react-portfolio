import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useAuthStorage } from '@features/auth/useAuthStorage';
import useStore from 'store/zustandStore';

const useUserDecoded = (): void => {
    const isAuth = useStore(state => state.userAuth.login);
    const token = localStorage.getItem('token');
    const storageHelper = useAuthStorage();

    useEffect(() => {
        if (!token) return;
        const { id, role, name }: { id: string; role: string; name: string } =
            jwtDecode(token);
        const userData = { id, access: role, name };

        storageHelper.saveUserData(userData);
    }, [isAuth, token, storageHelper]);
};

export default useUserDecoded;
