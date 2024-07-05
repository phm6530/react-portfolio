import styled from 'styled-components';
import FadeInAnimation from 'component/animations/FadeInAnimation';
import { device } from 'config/DeviceConfig';

export const NoSeachingData = styled(FadeInAnimation)`
    text-align: center;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
`;

export const ProjectListStyle = styled.div`
    flex-direction: row;
    border-radius: 1em;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const FlexRow = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    align-items: center;
    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 2rem;
    }
`;
