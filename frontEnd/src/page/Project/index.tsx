import DashBoard from 'component/ui/DashBoard/DashBoard';

// import UserProfile from 'component/profile/UserProfile';
import ProjectRoutes from 'Route/ProjectRoutes';

import { Grid, PageWrapper } from '@layout/Grid';
import styled from 'styled-components';

// import Motion from 'component/animations/Motion';

const FullWidthGrid = styled(Grid)`
    width: 100%;
`;

export default function Project() {
    return (
        <PageWrapper>
            <DashBoard
                pageTitle={'PROJECT'}
                subComment={'외부로 공개된 참여한 프로젝트만 기재합니다.'}
            />

            <FullWidthGrid>
                {/* Common */}
                {/* <Motion.FadeInOut>
                    <UserProfile />
                </Motion.FadeInOut> */}

                {/* Route  */}
                <ProjectRoutes />
            </FullWidthGrid>
        </PageWrapper>
    );
}
