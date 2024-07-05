import styled, { css } from 'styled-components';

export const ReplyPicture = styled.div<{ $picture: string }>`
    ${props => `background :url(/img/board/${props.$picture}.jpg)`};
    background-size: cover;
`;

export const ReplyUserName = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
    svg {
        font-size: 12px;
        margin-left: 0.4rem;
        color: #40a3a8;
    }
`;

export const ReplyWrap = styled.div<{ $admin?: boolean }>`
    margin-bottom: 3px;
    margin: 0 1rem;
    border-radius: 1em;
    margin-bottom: 10px;
    /* padding: 0 10px; */
    display: flex;
    position: relative;

    .replyPicture {
        width: 45px;
        height: 45px;
        margin-right: 20px;
        border-radius: 5em;

        border: 3px solid var(--borer-line-picture-color);
        box-sizing: border-box;
        box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.3);
    }
    .replyHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .replyDate {
        font-size: 12px;
        opacity: 0.4;
        color: #333;
    }
    .replyDescription {
        margin-bottom: 10px;
        margin-top: 5px;
        font-size: 14px;
        color: #333;
        word-break: break-all;
        white-space: pre-line;
    }
`;

export const ReplyBubble = styled.div<{ $admin: boolean }>`
    background-color: ${({ theme }) => theme.SearchBackground};
    padding: 10px 15px;
    border-radius: 0.5em;
    position: relative;
    /* min-width: 40%; */
    box-shadow: 2px 2px 3px rgb(0 0 0 / 15%);
    max-width: calc(100% - 85px);
    ${({ $admin }) =>
        $admin
            ? css`
                  background: #fedf7c;
                  border: 2px solid #e6bb49;
                  margin-right: 1rem;
              `
            : css`
                  background: #caeaf9;
                  border: 2px solid #a9cff1;
              `};

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -20px;
        top: 15px;
        width: 0;
        height: 0;
        border-bottom: 5px solid transparent;
        border-top: 5px solid transparent;
        border-left: 10px solid
            ${({ $admin }) => ($admin ? '#fedf7c' : '#caeaf9')};

        border-right: 10px solid transparent;
        transform: rotate(180deg);
    }
`;
