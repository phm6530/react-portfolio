import { device } from 'config/DeviceConfig';
import styled from 'styled-components';

export const ProfileCard = styled.div`
    border-radius: 1em;
    margin-bottom: 3rem;
    background: var(--color-background);
    border: var(--border--btn-type-1);
    box-shadow: var(--box-shadow-style);
    margin-right: 2rem;
    /* height: 70vh; */
    padding: 2rem;
    max-width: 17rem;
    width: 24%;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -3rem;
    @media ${device.laptopL} {
        margin-right: 0rem;
    }
    @media ${device.laptop} {
        display: none;
    }
`;
export const ProfilePicture = styled.div<{ $isOnline: boolean }>`
    width: 4.5rem;
    border-radius: 100%;

    border: 5px solid var(--borer-line-picture-color);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    img {
        width: 100%;
        border-radius: 100%;
    }
    span {
        color: red;
    }
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 0rem;
        border: 3px solid var(--borer-line-picture-color);
        top: 0rem;
        width: 1rem;
        height: 1rem;

        border-radius: 5em;

        background: ${props =>
            props.$isOnline ? 'rgb(48 255 192)' : 'rgb(127 127 127)'};
    }
`;
export const ProfileInfo = styled.div``;
export const JobTitle = styled.div`
    font-size: 0.8rem;

    color: red;
    color: #7f8fae;
`;

export const ProfileName = styled.div`
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    letter-spacing: -1px;
`;

export const ProfileLocation = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
    justify-content: center;
    margin-bottom: 2rem;
    svg {
        margin-right: 10px;
    }
`;
