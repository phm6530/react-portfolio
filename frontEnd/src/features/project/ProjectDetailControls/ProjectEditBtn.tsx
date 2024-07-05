import useCheckPermission from '@hooks/useAuthServer';
import { Button } from 'component/ui/Button';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProjectEditBtn: React.FC<{ projectKey: string }> = ({ projectKey }) => {
    const navigate = useNavigate();
    const checkPermission = useCheckPermission();

    const navEdit = async (projectKey: string) => {
        const authCheck = await checkPermission();
        if (!authCheck) {
            toast.info('권한이 없네요');
            return;
        }
        navigate(`/project/add?type=edit&key=${projectKey}`);
    };

    return (
        <>
            <Button.Action onClick={() => navEdit(projectKey)}>
                수정
            </Button.Action>
        </>
    );
};

export default ProjectEditBtn;
