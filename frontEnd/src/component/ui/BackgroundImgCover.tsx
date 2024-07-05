import { device } from 'config/DeviceConfig';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const infiniteBgAni = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;
const opacityAni = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const Background = styled.div<{ $bgImg: string; $mainPage?: boolean }>`
    background-position: 75% bottom;
    background-repeat: no-repeat;
    position: absolute;

    left: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;

    ${({ $bgImg }) => {
        return css`
            background-image: url(${$bgImg});
        `;
    }}
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            to right,
            rgb(0 0 0),
            rgb(0 0 0 / 53%),
            rgb(67 69 77 / 56%)
        );

        z-index: 0;
        animation: ${opacityAni} 1.4s ease;
    }

    animation: ${infiniteBgAni} 10s cubic-bezier(0.2, 0.56, 0.38, 0.41) infinite
        forwards alternate;
    height: ${({ $mainPage }) => {
        return $mainPage ? '100vh' : 'auto';
    }};

    @media ${device.laptop} {
        position: ${({ $mainPage }) => ($mainPage ? 'fixed' : 'absolute')};
    }

    /* transition: bottom 0.7s ease; */
`;

const BackgroundImgCover: React.FC<{
    mainPage?: boolean;
    imgSrc: string;
    children?: React.ReactNode;
}> = ({ mainPage, imgSrc, children }) => {
    // const parallaxRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const ParallaxHandler = () => {
    //         const ScrollBackgroundPosition = window.scrollY / 10;
    //         console.log(ScrollBackgroundPosition);
    //         if (parallaxRef.current) {
    //             parallaxRef.current.style.bottom = `-${ScrollBackgroundPosition}px`;
    //         }
    //     };

    //     window.addEventListener('scroll', ParallaxHandler);
    //     return () => {
    //         window.removeEventListener('scroll', ParallaxHandler);
    //     };
    // }, []);

    return (
        <Background $mainPage={mainPage} $bgImg={imgSrc}>
            {children}
        </Background>
    );
};

export default BackgroundImgCover;
