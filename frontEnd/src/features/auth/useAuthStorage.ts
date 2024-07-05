import { userData } from '@type/AuthTypes';
import { jwtDecode } from 'jwt-decode';

//로그인아웃
export const useAuthStorage = () => {
    return {
        removeUserData: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setUserData: (token: string) => {
            localStorage.setItem('token', token);
            const {
                id,
                role,
                name,
            }: { id: string; role: string; name: string } = jwtDecode(token);
            const userData = { id, access: role, name };
            localStorage.setItem('user', JSON.stringify(userData));
        },
        saveUserData: (userData: userData) => {
            localStorage.setItem('user', JSON.stringify(userData));
        },
    };
};
