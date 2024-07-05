import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'component/ui/Button';
import { device } from 'config/DeviceConfig';

const CateGoryArea = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    @media ${device.tablet} {
        margin: 0.2rem 0 2rem;
    }
`;

const CateGoryButton: React.FC<{ CateGory: string[]; type: string }> = ({
    CateGory,
    type,
}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [param] = useSearchParams();

    const pathName = () => {
        const arr = pathname.split('/');
        const lastIdx = arr.length - 1;
        if (arr.length <= 2) {
            return CateGory[0];
        }
        return arr[lastIdx];
    };

    // path
    const ParameterNav = (path: string) => {
        const arrPath = pathname.split('/');
        if (arrPath.length <= 2) {
            arrPath.push(path);
        } else {
            arrPath[arrPath.length - 1] = path;
        }
        const newPath = arrPath.join('/');
        return newPath;
    };

    const pageType = type === 'queryString';

    return (
        <CateGoryArea>
            {CateGory.map((e: string) => (
                <Button.SubmitButton
                    key={`key-${e}`}
                    active={
                        e ===
                        (pageType
                            ? param.get('search') || CateGory[0]
                            : pathName() || CateGory[0])
                    }
                    onClick={() =>
                        navigate(
                            pageType
                                ? `${pathname}?search=${e}`
                                : ParameterNav(e),
                        )
                    }
                >
                    {e}
                </Button.SubmitButton>
            ))}
        </CateGoryArea>
    );
};

export default CateGoryButton;
