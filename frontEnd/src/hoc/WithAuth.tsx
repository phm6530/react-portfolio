import { ComponentType, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from 'services/authService';
import { queryKey } from 'services/queryKey';
import useStore from 'store/zustandStore';

// 컴포넌트 props의 타입을 제네릭으로 받을 수 있게 정의
const withAuth = <P extends object>(
    Component: ComponentType<P>,
    redirectPath: string,
) => {
    return (props: P) => {
        const { logout, isAuth } = useStore(state => ({
            logout: state.userAuthLogout,
            isAuth: state.userAuth.login,
        }));
        const navigate = useNavigate();

        const { data, isError } = useQuery({
            queryKey: [queryKey.auth],
            queryFn: tokenCheck,
        });

        useEffect(() => {
            if (!isAuth || isError) {
                logout();

                navigate(redirectPath);
            }
        }, [isAuth, isError, navigate, logout]);

        // Component에 props를 그대로 전달
        return data?.Auth ? <Component {...props} /> : null;
    };
};

export default withAuth;
