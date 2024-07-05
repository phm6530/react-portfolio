import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchProjectNextPrevList } from 'services/projectService';
interface PrevnextList {
    description: string;
    id: number;
    thumbnail: string;
    project_key: string;
    isPage: string;
    title: string;
}
const useFetchNextPrevList = () => {
    const { key } = useParams<{ key?: string }>();

    const fetchProjectNextPrevTypeGard = (key?: string) => {
        if (key) {
            return fetchProjectNextPrevList(key);
        }
        throw new Error('key가 없습니다.');
    };

    return useQuery<PrevnextList[]>({
        queryKey: ['boardPrevNext'],
        queryFn: () => fetchProjectNextPrevTypeGard(key),
        enabled: !!key,
    });
};

export default useFetchNextPrevList;
