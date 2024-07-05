import { useMutation } from '@tanstack/react-query';
import { ProjectDetailProps, ProjectPostProps } from '@type/ProjectTypes';
import { queryClient } from 'react-query/queryClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { projectAction } from 'services/projectService';

const useEditorAction = (
    pageType: string | null,
    projectKey: string | null,
) => {
    const navigate = useNavigate();
    return useMutation<void, unknown, ProjectDetailProps>({
        mutationFn: async (data: ProjectDetailProps) => {
            const payload: ProjectPostProps = { ...data, projectKey };
            return projectAction(payload, pageType);
        },
        onSuccess: () => {
            toast.success(
                pageType !== 'edit'
                    ? '프로젝트가 등록되었습니다.'
                    : '프로젝트가 수정되었습니다.',
            );
            queryClient.invalidateQueries({ queryKey: ['projectDetail'] });
            queryClient.invalidateQueries({ queryKey: ['project'] });
            navigate('/project');
        },
    });
};

export default useEditorAction;
