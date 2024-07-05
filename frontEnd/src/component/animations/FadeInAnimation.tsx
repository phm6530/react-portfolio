import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-40px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

const fadeInRight = keyframes`
from {
    opacity: 0;
    transform: translateX(40px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

const fadeInUp = keyframes`
from {
    opacity: 0;
    transform: translateY(40px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;

const Component = styled.div<{ $visible: boolean; $position?: string }>`
    opacity: 0;
    width: 100%;
    ${props => {
        if (props.$visible) {
            switch (props.$position) {
                case 'left':
                    return css`
                        transform: translateX(-40px);
                        animation: ${fadeInLeft} 0.5s ease forwards;
                    `;
                case 'right':
                    return css`
                        transform: translateX(40px);
                        animation: ${fadeInRight} 0.5s ease forwards;
                    `;
                default:
                    return css`
                        animation: ${fadeInUp} 0.5s ease forwards;
                    `;
            }
        }
    }}
`;
interface FadeInAnimationProps {
    board?: string;
    position?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
    position,
    children,
    onClick,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const slideHandler = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            setVisible(true);
        }
    };

    // div 관찰
    useEffect(() => {
        if (!ref.current) return;
        // console.log(ref);/
        const view = ref.current;
        const io = new IntersectionObserver(slideHandler, {
            threshold: 0.5,
        });
        io.observe(view);

        return () => io.disconnect();
    }, []);

    return (
        <Component
            onClick={onClick}
            {...props}
            $visible={visible}
            ref={ref}
            $position={position}
        >
            {children}
        </Component>
    );
};

export default FadeInAnimation;
