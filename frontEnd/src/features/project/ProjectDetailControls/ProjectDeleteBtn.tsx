import useCheckpermission from '@hooks/useAuthServer';
import usePopupHook from '@hooks/usePopupHook';
import useProjectDelete from '@features/project/hooks/useProjectDelete';

import { ProjectKey } from '@type/ProjectTypes';

import { toast } from 'react-toastify';
import { Button } from 'component/ui/Button';

const ProjectDeleteBtn: React.FC<{ projectKey: ProjectKey }> = ({
    projectKey,
}) => {
    const { popupSetView, PopupComponent } = usePopupHook();
    const { mutate } = useProjectDelete('project', projectKey);
    const checkPermission = useCheckpermission();

    const authCheck = async () => {
        const authCheck = await checkPermission();
        if (!authCheck) {
            toast.info('권한이 없네요');
            return;
        }
        popupSetView(true);
    };

    const deleteHandler = async () => {
        mutate();
    };

    return (
        <>
            <PopupComponent type="confirm" event={deleteHandler} />
            <Button.Action onClick={authCheck}>삭제</Button.Action>
        </>
    );
};

export default ProjectDeleteBtn;
