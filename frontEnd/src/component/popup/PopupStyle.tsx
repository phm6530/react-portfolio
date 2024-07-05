import styled, { css, keyframes } from 'styled-components';
const onPopup = keyframes`
    from{
        opacity: 0;
        transform: translateY(50px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

const offPopup = keyframes`
    from{
        opacity: 1;
        transform: translateY(0px);
    }
    to{
        opacity: 0;
        transform: translateY(-50px);
    }
`;

const PopupStyle = styled.div`
    max-width: 400px;
    position: fixed;
    z-index: 110;
    width: 95%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .close {
        text-align: center;
        width: 100%;
        padding: 0.7rem;
        font-size: 0.8rem;

        span {
            &::after {
                position: absolute;
                left: 0;
                display: block;
                content: '';
                width: 100%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.5);
                display: none;
            }
        }
    }
`;

const PopupWrap = styled.div<{ $close: boolean }>`
    padding: 20px;
    border-radius: 1em;
    background: var(--color-popup-background);
    animation: ${onPopup} 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    ${({ $close }) => {
        if ($close) {
            return css`
                animation: ${offPopup} 0.4s
                    cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            `;
        }
    }}

    box-shadow: 15px 55px 55px rgba(0, 0, 0, 0.9);
    border: 1px solid var(--borer-line-color);
`;

export { PopupWrap, PopupStyle };
