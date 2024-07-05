import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopButton from 'component/ui/TopButton';
import useStore from 'store/zustandStore';
import useScrollY from '@hooks/useScrollY';
import { Grid } from '@layout/Grid';
import * as S from '@layout/RootNavStyle';
import DrawerMenu from 'component/ui/DrawerMenu';
import RootNavList from '@layout/RootNavList';
import BackDrop from 'component/popup/Backdrop';

export default function RootNav() {
    const darkMode = useStore(state => state.darkMode);
    const { scrollOver } = useScrollY(430);
    const location = useLocation();
    const navigate = useNavigate();

    // 햄버거 메뉴 + draw 여부
    const [drawerView, setDrawerView] = useState<boolean>(false);

    useEffect(() => {
        setDrawerView(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (drawerView) {
                event.preventDefault();
            }
        };

        if (drawerView) {
            window.addEventListener('wheel', handleScroll, { passive: false });
        } else {
            window.removeEventListener('wheel', handleScroll);
        }

        // cleanup 함수를 사용하여 useEffect가 unmount될 때 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [drawerView]);

    return (
        <>
            {drawerView && <BackDrop onClick={() => setDrawerView(false)} />}

            <TopButton />

            <S.Header
                $scrollOver={scrollOver}
                $path={location.pathname === '/'}
                $darkMode={darkMode}
            >
                <Grid>
                    <S.Nav>
                        {' '}
                        <S.MyName
                            $scrollOver={scrollOver}
                            $darkMode={darkMode}
                            onClick={() => navigate('/')}
                        >
                            PHM{`'`} Portfolio .
                        </S.MyName>{' '}
                        {/* 햄버거 메뉴 */}
                        <DrawerMenu
                            drawerView={drawerView}
                            scrollOver={scrollOver}
                            setDrawerView={setDrawerView}
                        />
                        {/* Nav */}
                        <RootNavList
                            drawerView={drawerView}
                            scrollOver={scrollOver}
                        />
                    </S.Nav>
                </Grid>
            </S.Header>
        </>
    );
}
