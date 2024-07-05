import FadeInAnimation from 'component/animations/FadeInAnimation';
import styled from 'styled-components';

const NoSeachingData = styled(FadeInAnimation)`
    text-align: center;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
`;

const NonData = ({ message }: { message: React.ReactNode }) => {
    return <NoSeachingData>{message}</NoSeachingData>;
};

export default NonData;
