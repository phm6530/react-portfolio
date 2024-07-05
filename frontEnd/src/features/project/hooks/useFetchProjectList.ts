import { useQuery } from '@tanstack/react-query';
import { ProjectPostProps } from '@type/ProjectTypes';
import { useLocation } from 'react-router-dom';
import { projectFetch } from 'services/projectService';

const useFetchProjectList = () => {
    const location = useLocation();
    const isProjectIndex =
        location.pathname === '/project' || location.pathname === '/project/';

    return useQuery<ProjectPostProps[], Error>({
        queryKey: ['project'],
        queryFn: projectFetch,
        refetchOnWindowFocus: false,
        enabled: isProjectIndex,
        staleTime: 5 * 60 * 1000,
    });
};

export default useFetchProjectList;
