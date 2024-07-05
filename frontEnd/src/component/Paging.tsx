import { Pagination, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledPagination = styled(Pagination)`
    .MuiPaginationItem-root {
        color: ${({ theme }) => theme.textColor}; // 테마의 주 색상 사용
    }

    .Mui-selected {
        background: #53535329 !important; // 문자열을 제거하고 색상 코드만 남김
        color: ${({ theme }) => theme.textColor}; // 선택된 페이지의 텍스트 색상
    }
`;

const Paging: React.FC<{ paging: number }> = ({ paging }) => {
    const navigate = useNavigate();
    const [param] = useSearchParams();
    const pageParam = param.get('page');

    const setPageQueryString = (
        _: React.ChangeEvent<unknown>,
        value: number,
    ): void => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', value.toString());
        navigate(`?${searchParams}`);
    };

    useEffect(() => {
        if (pageParam) {
            window.scrollTo(0, 0);
        }
    }, [pageParam]);

    return (
        <Stack spacing={0} alignItems="center" justifyContent="center">
            <StyledPagination
                count={paging}
                page={pageParam ? +pageParam : 1}
                onChange={setPageQueryString}
            />
        </Stack>
    );
};

export default Paging;
