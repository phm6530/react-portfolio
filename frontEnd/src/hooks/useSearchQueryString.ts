import { useNavigate } from 'react-router-dom';

const useQueryString = (path: string) => {
    const navigate = useNavigate();

    const navigateHandler = (params: { [param: string]: string | number }) => {
        const query = Object.keys(params)
            .map(
                key =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
            )
            .join('&');

        navigate(`/${path}?${query}`, { replace: true });
    };

    return {
        navigateHandler,
    };
};

export default useQueryString;
