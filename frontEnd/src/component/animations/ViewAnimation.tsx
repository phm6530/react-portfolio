import styled, { keyframes } from 'styled-components';
const viewAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const AnimationWrapper = styled.div`
    .view-animation {
        opacity: 0;
        animation: ${viewAnimation} 1s cubic-bezier(0.1, 0.45, 0, 1.09) forwards;
    }
    & .view-animation:nth-of-type(1) {
        animation-delay: 0.6s;
    }
    & .view-animation:nth-of-type(2) {
        animation-delay: 0.8s;
    }
    & .view-animation:nth-of-type(3) {
        animation-delay: 1s;
    }
`;

const ViewAnimation: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <AnimationWrapper id="g">{children}</AnimationWrapper>;
};

export default ViewAnimation;
