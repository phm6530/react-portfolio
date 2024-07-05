import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useTextsnap = (text: number) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const startValue = +textRef.current.innerHTML;
            gsap.fromTo(
                textRef.current,
                { innerHTML: startValue },
                {
                    innerHTML: text,
                    duration: 2,
                    snap: { innerHTML: 1 },
                },
            );
        }
    }, [text]);

    return textRef;
};

export default useTextsnap;
