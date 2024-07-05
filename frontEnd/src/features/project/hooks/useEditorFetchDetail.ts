import { useQuery } from '@tanstack/react-query';
import { projectEdit } from 'services/projectService';
import { queryKey } from 'services/queryKey';

const useEditorFetchDetail = (projectKey: string, pageType: string | null) => {
    return useQuery({
        queryKey: [queryKey.projectAdd],
        queryFn: () => projectEdit(projectKey),
        enabled: !!(projectKey && pageType),
    });
};

export default useEditorFetchDetail;
