import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const SpinnerStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    p {
        margin-left: 1rem;
        font-weight: bold;
        font-size: 0.8rem;
    }
`;

const SpinnerLoading = (): JSX.Element => {
    return (
        <SpinnerStyle>
            <CircularProgress color="secondary" />
            <p>loading...</p>
        </SpinnerStyle>
    );
};

export { SpinnerLoading };
