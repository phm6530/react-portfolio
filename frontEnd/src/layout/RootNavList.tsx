import useLogout from '@features/auth/hooks/useLogout';
import DarkModeBtn from 'component/ui/DarkModeBtn';
import { NAVPAGE_OBJECT } from 'constants/routePath';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from 'store/zustandStore';
import LoginForm from '@features/auth/LoginForm'; // Component
import * as S from '@layout/RootNavStyle';
import usePopupHook from '@hooks/usePopupHook';

const RootNavList: React.FC<{ drawerView: boolean; scrollOver: boolean }> = ({
    drawerView,
    scrollOver,
}) => {
    const { darkMode, userAuth } = useStore(state => state);
    const { popupSetView, PopupComponent } = usePopupHook();

    const { mutateAsync } = useLogout();
    const { pathname } = useLocation();

    const navigate = useNavigate();

    return (
        <>
            {/* 팝업 커스텀 훅 */}
            <PopupComponent type="modal" Component={LoginForm} />

            <S.LinkWrapper $toggle={drawerView}>
                <S.UiStyle $link={true}>
                    {NAVPAGE_OBJECT.map((e, idx) => {
                        const onAuthPage = e.AuthPage === true;

                        //권한필요한거는 랜더링 안함
                        if (!userAuth.login && onAuthPage) {
                            return;
                        }
                        return (
                            <S.List
                                key={idx}
                                $scrollOver={scrollOver}
                                $darkMode={darkMode}
                                $path={pathname === '/'}
                                $active={pathname === e.path}
                                onClick={() => {
                                    if (e.path === pathname) return; //같은 path 재랜더링 방지
                                    if (!e.AuthPage || userAuth.login) {
                                        navigate(e.path);
                                    }
                                }}
                            >
                                {e.pathName}
                            </S.List>
                        );
                    })}
                </S.UiStyle>
                <S.UiStyle>
                    {/* 다크모드 버튼 */}
                    <DarkModeBtn />
                    {/* login Component */}
                    {!userAuth.login && (
                        <S.List
                            $scrollOver={scrollOver}
                            $darkMode={darkMode}
                            onClick={() => popupSetView(true)}
                            $not={true}
                            $logout={true}
                        >
                            로그인
                        </S.List>
                    )}
                    {userAuth.login && (
                        <S.List
                            $scrollOver={scrollOver}
                            $darkMode={darkMode}
                            onClick={async () => await mutateAsync()}
                            not={true}
                            $logout={true}
                        >
                            로그아웃
                        </S.List>
                    )}{' '}
                </S.UiStyle>
            </S.LinkWrapper>
        </>
    );
};

export default RootNavList;
