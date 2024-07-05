import withFetchData from 'hoc/withFetchData';
import ProjectDetail from '@features/project/ProjectDetail';
import ProjectEditor from '@features/project/ProjectEditor/ProjectEditor';
import Motion from 'component/animations/Motion';
import withAuth from 'hoc/WithAuth';

import styled from 'styled-components';
import ProjectList from '@features/project/ProjectList';

import { Route, Routes, useLocation } from 'react-router-dom';
import { fetchDetail } from 'services/projectService';

const FlexMotion = styled(Motion.FadeInOut)`
    flex-grow: 1;
`;

const ProjectRoutes = (): JSX.Element => {
    const location = useLocation();

    const AthencatedProjectEditor = withAuth(ProjectEditor, '/project');
    const FetchDataComponent = withFetchData(ProjectDetail, fetchDetail);

    const paths = [
        { path: '/', index: true, Component: <ProjectList /> },
        {
            path: 'add',
            Component: <AthencatedProjectEditor />,
        },
        {
            path: '/:key',
            Component: (
                <FetchDataComponent
                    redirectPath={'/project'}
                    queryKeyPrefix={'projectDetail'}
                />
            ),
        },
    ];

    return (
        <>
            <Routes location={location} key={location.pathname}>
                {paths.map(path => {
                    return (
                        <Route
                            path={path.path}
                            key={path.path}
                            element={<FlexMotion>{path.Component}</FlexMotion>}
                        />
                    );
                })}
            </Routes>
        </>
    );
};

export default ProjectRoutes;
