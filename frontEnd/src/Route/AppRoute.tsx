import { AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

import Motion from 'component/animations/Motion';

import RootNav from '@layout/RootNav';
import { ROUTE_PATH } from 'constants/routePath';
import Footer from '@layout/Footer';

const AppRoute = (): JSX.Element => {
    const location = useLocation();
    const pageKey = location.pathname.split('/')[1];

    return (
        <>
            <RootNav />
            <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Routes location={location} key={`path_${pageKey}`}>
                    {ROUTE_PATH.map(({ path, Component }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<Motion.Page>{Component}</Motion.Page>}
                            />
                        );
                    })}
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
};

export default AppRoute;
