import { ReactQuery, ReactRouteDom } from 'lib/lib';
import { ComponentType } from 'react';
import NotfoundPage from 'component/error/NotfoundPage';
import { SpinnerLoading } from 'component/loading/SpinnerLoading';

const { useParams } = ReactRouteDom;
const { useQuery } = ReactQuery;

interface WithFetchDataReturnProps {
    redirectPath: string;
    queryKeyPrefix: string;
}

const withFetchData = <P extends object, R extends P>(
    Component: ComponentType<P>,
    fetchFunction: (key: string) => Promise<R>,
) => {
    return ({
        redirectPath,
        queryKeyPrefix,
        ...props //뿌리기
    }: WithFetchDataReturnProps & Partial<P>) => {
        const { key } = useParams<{ key: string }>();

        const { data, isLoading } = useQuery<R>({
            queryKey: [queryKeyPrefix, key],
            queryFn: () => fetchFunction(key!),
            enabled: !!key,
            staleTime: 5 * 60 * 1000,
        });

        if (data && !isLoading) {
            return <Component {...(data as R)} {...(props as P)} />;
        } else if (isLoading) {
            return <SpinnerLoading />;
        } else {
            return <NotfoundPage redirectPath={redirectPath} />;
        }
    };
};

export default withFetchData;
