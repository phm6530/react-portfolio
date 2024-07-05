import styled, { css } from 'styled-components';

export const Button = styled.button`
    border-radius: 10px;
    background: #373737;
    font-size: 30px;
    padding: 0 30px;
    font-weight: 700;
    font-family: 'Poppins';
    font-style: normal;
    border: 3px solid transparent;
    span {
        color: #898989;
    }
`;

export const MainNavsContainer = styled.div`
    margin-top: 1rem;
`;

const GradientStyle = css`
    background: linear-gradient(
        295.14deg,
        #64c7ef 17.16%,
        #a9a5cc 50.35%,
        #8e9bfc 79.79%
    );
    span {
        background: linear-gradient(
            295.14deg,
            #64c7ef 17.16%,
            #a9a5cc 50.35%,
            #8e9bfc 79.79%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const BtnGradient = styled.div<{ $check: boolean }>`
    display: inline-block;
    padding: 3px;
    border-radius: 0.7rem;
    margin-right: 1rem;
    transition: all 0.5s ease-in;
    background: transparent;
    ${({ $check }) => $check && GradientStyle}
    &:hover {
        ${GradientStyle}
    }
`;
