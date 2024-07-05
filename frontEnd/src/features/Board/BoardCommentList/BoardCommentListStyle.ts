import styled from 'styled-components';

export const FirstDayStyle = styled.div<{ $first: boolean }>`
    font-size: 1rem;
    letter-spacing: -0.1rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 14px;
        display: inline-block;
        font-weight: normal;
        margin-left: 0.6rem;
        opacity: 0.7;
        margin-bottom: 0.3rem;
    }
    ${props => props.$first && 'margin-top: 0;'}
    &:after {
        content: '';
        flex-grow: 1;
        color: var(--borer-line-color);
        opacity: 0.4;
        border-bottom: 1px solid;
        width: 50%;
        margin-left: 2rem;
    }
`;

export const BoardReplyWrap = styled.div`
    height: 100%;
    /* background: #9bbbd4; */
    padding: 50px 0;
    &::-webkit-scrollbar {
        width: 4px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 20%; /* 스크롤바의 길이 */
        background: rgba(0, 0, 0, 0.3); /* 스크롤바의 색상 */
        overflow: hidden;
        border-radius: 10px;
        box-sizing: border-box;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
    }
`;
