import styled, { keyframes } from 'styled-components';
import React, { ReactNode } from 'react';
import { device } from 'config/DeviceConfig';
const animation = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const animationShadow = keyframes`
    from{
        opacity: 0;
        transform: translateX(0px);
    }
    to{
        opacity: .15;
        transform: translateX(50px);
    }
`;
const DashBoardTitleStyle = styled.div`
    background: linear-gradient(to top, #ffffff, #ffffff, #96c1ff);
    /* background: linear-gradient(to left, #7264ef, #7264ef, #dd8efc); */
    color: transparent;
    background-clip: text;
    margin-right: 0.5rem;
    opacity: 0;
    font-family: 'Poppins';
    /* font-family: 'Montserrat'; */
    -webkit-background-clip: text;
    letter-spacing: -0.1rem;
    font-size: 5rem;
    font-weight: bold;
    animation: ${animation} 1s 0.5s cubic-bezier(0.1, 0.45, 0, 1.09) forwards;
    @media ${device.tablet} {
        font-size: 3.4rem;
    }
`;

const DashBoardShadow = styled.div`
    position: absolute;
    font-size: 5rem;
    z-index: 0;
    font-family: 'Poppins';
    bottom: -25px;
    background: linear-gradient(to top, #ffffff11, #c2c2c22b, #0000004a);
    /* background: linear-gradient(to top, #000000c4, #000000, #000000); */
    left: 10px;
    color: transparent;
    font-weight: bold;
    background-clip: text;
    -webkit-background-clip: text;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.1, 0.45, 0, 1.09);
    animation: ${animationShadow} 1s 0.7s cubic-bezier(0.1, 0.45, 0, 1.09)
        forwards;
`;

const RelativeContainer = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

// ... 기존의 styled-components 정의 ...
interface DashBoardTitleProps {
    className?: string;
    children: ReactNode;
}

export default function DashBoardTitle({
    className,
    children,
}: DashBoardTitleProps) {
    // useEffect(() => {
    //     const parallax = () => {
    //         const target = document.getElementById('dashboardShadow')!;
    //         const ScrollHegiht = (window.scrollY + 75) / 3;
    //         target.style.bottom = `-${ScrollHegiht}px`;
    //     };
    //     document.addEventListener('scroll', parallax);
    //     return () => {
    //         document.removeEventListener('scroll', parallax);
    //     };
    // }, []);

    return (
        <RelativeContainer>
            <DashBoardTitleStyle className={className}>
                {children}
            </DashBoardTitleStyle>
            <DashBoardShadow id="dashboardShadow" className={className}>
                {children}
            </DashBoardShadow>
        </RelativeContainer>
    );
}
