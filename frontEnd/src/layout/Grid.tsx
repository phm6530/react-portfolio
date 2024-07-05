import { device } from 'config/DeviceConfig';
import styled, { css } from 'styled-components';

const MainSpacer = css`
    @media ${device.laptopL} {
        padding: 0 60px;
    }
    @media ${device.tablet} {
        padding: 0 40px;
    }
    @media ${device.mobileL} {
        padding: 0 15px;
    }
`;

const CenteredGrid = styled.div`
    position: relative;
    z-index: 1;
    ${MainSpacer}
    max-width: 1080px;
    margin: 0 auto;
`;

const LayoutSpacer = styled.div`
    flex-grow: 1;
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: 0 auto;
    align-items: flex-start;
`;

const PageCenteredGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

const PageWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

// center Grid
const Grid = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return <CenteredGrid className={className}>{children}</CenteredGrid>;
};

const PageGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <PageCenteredGrid>
            <LayoutSpacer>{children}</LayoutSpacer>
        </PageCenteredGrid>
    );
};

//Wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return <PageWrapperStyle>{children}</PageWrapperStyle>;
};

export { Grid, LayoutSpacer, MainSpacer, PageGrid, PageWrapper };
