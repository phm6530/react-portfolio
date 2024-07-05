import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useKey = () => {
    const [params] = useSearchParams();
    const [key, setKey] = useState<string>('');

    useEffect(() => {
        let currentKey = params.get('key');
        if (!currentKey) {
            currentKey = uuidv4();
        }
        setKey(currentKey);
    }, [params]);

    return { key };
};

export default useKey;
