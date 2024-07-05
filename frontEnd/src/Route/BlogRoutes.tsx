import styled from 'styled-components';
import { useLocation, Route, Routes } from 'react-router-dom';
import BlogDetail from 'page/blog/pages/BlogDetail';

import { AnimatePresence } from 'framer-motion';
import Motion from 'component/animations/Motion';
import BlogAdd from 'page/blog/pages/BlogAdd';
import BlogPage from 'page/blog/pages/BlogPage';
import withAuth from 'hoc/WithAuth';

const MotionStyle = styled(Motion.FadeInOut)`
    flex: 1;
    width: 100%;
`;

const BlogRoutes = (): JSX.Element => {
    const location = useLocation();
    const AuthenticatedBlodAdd = withAuth(BlogAdd, '/blog');
    const paths = [
        { path: '/', index: true, Component: <BlogPage /> },
        { path: '/:key', Component: <BlogDetail /> },
        {
            path: '/add',
            Component: <AuthenticatedBlodAdd />,
        },
    ];

    return (
        <>
            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <Routes location={location} key={location.pathname}>
                    {paths.map(path => {
                        return (
                            <Route
                                path={path.path}
                                key={path.path}
                                element={
                                    <MotionStyle>{path.Component}</MotionStyle>
                                }
                            />
                        );
                    })}
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default BlogRoutes;
