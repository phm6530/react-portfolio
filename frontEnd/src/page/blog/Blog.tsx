import { Grid } from '@layout/Grid';
import { BoardWrapper } from '@features/Blog/BlogStyle';
import DashBoard from 'component/ui/DashBoard/DashBoard';

import BlogRoutes from 'Route/BlogRoutes';
import styled from 'styled-components';

import { PageWrapper } from '@layout/Grid';
import { device } from 'config/DeviceConfig';
import Motion from 'component/animations/Motion';

const CustomGrid = styled(Grid)`
    width: 100%;

    /* @media ${device.laptopL} {
        width: auto;
    } */
`;

const Blog = (): JSX.Element => {
    return (
        <>
            {' '}
            <PageWrapper>
                <DashBoard
                    pageTitle={'Blog'}
                    subComment={'"퍼블리셔와 개발자 사이 그어딘가"'}
                />
                <CustomGrid>
                    <BoardWrapper>
                        <Motion.FadeInOut>
                            <BlogRoutes />
                        </Motion.FadeInOut>
                    </BoardWrapper>
                </CustomGrid>
            </PageWrapper>
        </>
    );
};

export default Blog;
