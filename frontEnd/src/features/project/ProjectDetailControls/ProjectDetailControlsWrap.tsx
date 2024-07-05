import ProjectDeleteBtn from '@features/project/ProjectDetailControls/ProjectDeleteBtn';
import { ProjectKey } from '@type/ProjectTypes';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProjectEditBtn from '@features/project/ProjectDetailControls/ProjectEditBtn';
import { Button } from 'component/ui/Button';

const ButtonArea = styled.div`
    button {
        font-size: 14px;
        font-weight: normal;
        border-radius: 4px;
        margin-left: 5px;
    }
`;

const ProjectDetailControlsWrap: React.FC<{ projectKey: ProjectKey }> = ({
    projectKey,
}) => {
    const navigate = useNavigate();

    return (
        <ButtonArea>
            <Button.Action onClick={() => navigate('/project')}>
                목록
            </Button.Action>

            <>
                <ProjectEditBtn projectKey={projectKey} />
                {/* 삭제 */}
                <ProjectDeleteBtn projectKey={projectKey} />
            </>
        </ButtonArea>
    );
};

export default ProjectDetailControlsWrap;
