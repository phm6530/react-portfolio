import { NAVPAGE_OBJECT } from 'constants/routePath';
import { useNavigate } from 'react-router-dom';
import {
    BtnGradient,
    Button,
    MainNavsContainer,
} from '@features/Main/MianNavsStyle';

const HomeNavBtn = ({
    idx,
    path,
    pathName,
}: {
    idx: number;
    path: string;
    pathName: string;
}) => {
    const navigate = useNavigate();

    return (
        <BtnGradient $check={idx === 0}>
            <Button onClick={() => navigate(path)}>
                <span>{pathName}</span>
            </Button>
        </BtnGradient>
    );
};

const MainNavs = () => {
    return (
        <MainNavsContainer>
            {NAVPAGE_OBJECT.map((e, idx) => {
                return (
                    <HomeNavBtn
                        key={e.path}
                        idx={idx}
                        path={e.path}
                        pathName={e.pathName}
                    />
                );
            })}
        </MainNavsContainer>
    );
};

export default MainNavs;
