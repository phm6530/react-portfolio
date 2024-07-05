import React, { useEffect } from 'react';
import styled from 'styled-components';

const AnimationSection = styled.section`
    overflow: hidden;

    @keyframes animate {
        0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
        }
    }
    @keyframes Light {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow:
            0 0 0 4px rgba(255, 255, 255, 0.1),
            0 0 0 8px rgba(255, 255, 255, 0.1),
            0 0 20px rgba(255, 255, 255, 0.1);
        animation:
            animate 0.5s linear infinite,
            Light 1s ease-in-out infinite;
    }

    span::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #ffffffa4, transparent);
    }

    .span-1 {
        top: 0;
        right: 0;
        left: initial;
    }

    .span-2 {
        top: -20px;
        right: 180px;
        left: initial;
    }

    .span-3 {
        top: 80px;
        right: -30px;
        left: initial;
    }
`;

const ShootingStar = (): JSX.Element => {
    useEffect(() => {
        const spans = document.querySelectorAll('span');

        spans.forEach(span => {
            const delay = Math.random() * 2; // 0에서 12초 사이의 랜덤 값
            const duration = 1 + Math.random() * 2; // 1에서 3초 사이의 랜덤 값

            span.style.animationDelay = `${delay}s`;
            span.style.animationDuration = `${duration}s`;
        });
    }, []);

    return (
        <AnimationSection>
            <span className="span-1"></span>
            <span className="span-2"></span>
            <span className="span-3"></span>
        </AnimationSection>
    );
};

export default ShootingStar;
