import { ReactQuery } from 'lib/lib';
import { fetchTimerSetting } from 'services/tastTimerService';
import { queryKey } from 'services/queryKey';

const { useQuery, useQueryClient } = ReactQuery;

const useTimer = () => {
    const { data, isLoading } = useQuery({
        queryKey: [queryKey.timer],
        queryFn: fetchTimerSetting,
        refetchOnWindowFocus: false,
        staleTime: 1000,
    });

    const queryClient = useQueryClient();

    const getWebsoketTimer = () => {
        queryClient.invalidateQueries({ queryKey: [queryKey.timer] });
    };

    return {
        data,
        isLoading,
        getWebsoketTimer,
    };
};

export default useTimer;
