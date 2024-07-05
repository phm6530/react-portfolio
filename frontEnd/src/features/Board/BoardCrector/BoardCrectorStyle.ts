import styled, { keyframes } from 'styled-components';

const checkAnimtaion = keyframes`
from{
    opacity: 0;
    transform: scale(.5);
}
to{
    opacity: 1;
    transform: scale(1);
}
`;

export const RadioStyle = styled.label`
    position: relative;
    box-sizing: border-box;
    transition: transform 0.2s ease;
    input {
        display: none;
    }
    &:hover {
        transform: scale(1.1);
    }
    img {
        border-radius: 7em;
    }
    border: 7px solid transparent;

    &.checked {
        border: 7px solid var(--borer-line-picture-color);
        box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.2);
        border-radius: 100%;
        img {
            filter: none;
        }
        &::after {
            position: absolute;
            content: '';
            width: 17px;
            height: 17px;
            border-radius: 2em;
            top: -7px;
            background: var(--gradient-title-color);
            border: 2px solid #fff;
            animation: ${checkAnimtaion} 0.5s ease;
        }
    }
    img {
        width: 50px;
        cursor: pointer;
        filter: grayscale(1);
    }
`;
export const RadioWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 13em;
    margin-bottom: 19px;
    padding: 0.4rem;
    z-index: 1;
    left: 0;
    top: -4em;
    background: #c4c4c417;

    box-sizing: border-box;
`;

export const CrectorDeScription = styled.span`
    font-size: 12px;
    opacity: 0.5;
    margin-left: 0.3rem;
`;

export const Label = styled.span`
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
`;
