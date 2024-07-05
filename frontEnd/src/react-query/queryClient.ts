import { ReactQuery } from 'lib/lib';
const { QueryClient, QueryCache } = ReactQuery;
import { toast } from 'react-toastify';

// 에러메세지 커스텀
const queryErrorHandler = (error: { message: string }) => {
    if (error) {
        toast.error(error.message);
    }
};

// 인스턴스로 전역에러 관리
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
        mutations: {
            onError: queryErrorHandler,
        },
    },
    queryCache: new QueryCache({
        onError: queryErrorHandler,
    }),
});
