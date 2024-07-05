import { useEffect } from 'react';

const useAddTransition = () => {
    // 마운트 한이후 클래스 삽입
    useEffect(() => {
        document.body.classList.add('enable-transition')!;
    }, []);
};

export default useAddTransition;
