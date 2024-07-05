import { ReactQuery } from 'lib/lib';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const { useMutation, useQueryClient } = ReactQuery;

const useExcuteMutation = (fetchFn, key, text) => {
    const queryclient = useQueryClient();

    const { mutate, isError, error } = useMutation({
        mutationFn: formData => fetchFn(formData),
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: key });
            if (!text) return;
            toast.success(`${text}되었습니다.`);
        },
    });

    useEffect(() => {
        if (isError && error) {
        }
    }, [isError, error]);

    return { mutate };
};

export default useExcuteMutation;
