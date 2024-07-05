import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const usePrograssbar = (percent: number) => {
    const PrograssRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP 애니메이션: 숫자 증가
        if (PrograssRef.current) {
            gsap.to(PrograssRef.current, {
                width: `${percent}%`, // 너비를 percent prop 값으로 변경
                duration: 1.5, // 애니메이션 지속 시간(초)
                ease: 'power1.out', // 애니메이션 가속도
            });
        }
    }, [percent]);

    return PrograssRef;
};

export default usePrograssbar;
