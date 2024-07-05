import { useNavigate } from 'react-router-dom';
import { useAuthCheck } from 'hooks/useAuthCheck';
import { Button } from 'component/ui/Button';

const PostAddBtn = (): JSX.Element => {
    const navigate = useNavigate();
    const { checkHandler } = useAuthCheck();

    const nav = () => {
        if (!checkHandler()) return;
        navigate('add');
    };

    return (
        <>
            <Button.Action onClick={nav}>글쓰기</Button.Action>
        </>
    );
};

export default PostAddBtn;
