import { useEffect, useState } from 'react';

const useScrollY = (windowTop: number): { scrollOver: boolean } => {
    const [scrollOver, setScrollOver] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > windowTop) {
                setScrollOver(true);
            } else {
                setScrollOver(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [windowTop]);
    return { scrollOver };
};

export default useScrollY;
