import { projectDelete } from 'services/projectService';
import { ReactQuery, ReactRouteDom } from 'lib/lib';
import { ProjectKey } from '@type/ProjectTypes';

const { useNavigate } = ReactRouteDom;
const { useQueryClient, useMutation } = ReactQuery;

const useProjectDelete = (redirectPath: string, ProjectKey: ProjectKey) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => projectDelete(ProjectKey),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['project'] });
            navigate(`/${redirectPath}`);
        },
    });
};

export default useProjectDelete;
