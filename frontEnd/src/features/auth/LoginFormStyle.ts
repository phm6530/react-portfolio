import styled from 'styled-components';
export const LoginHeaderStyle = styled.div`
    padding-bottom: 30px;
    padding-top: 20px;
    text-align: left;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 25px 0px 20px rgba(0, 0, 0, 0.3);

    p {
        font-size: 14px;
        font-weight: normal;
        opacity: 0.5;
    }
`;

export const LoginStyle = styled.form`
    button {
        width: 100%;
        color: #fff;
        border-radius: 5em;
        margin-bottom: 10px;
    }
`;

export const LabelStyle = styled.label`
    position: relative;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    &::after {
        position: absolute;
        left: 5px;
        top: -10px;
        padding: 0px 5px;
        font-size: 12px;
        background: var(--color-popup-background);
        font-weight: bold;
    }

    &:nth-child(2) {
        &::after {
            content: 'Admin ID';
        }
    }

    &:nth-child(3) {
        &::after {
            content: 'password';
        }
    }
`;

export const LoginInputStyle = styled.input`
    padding-left: 10px;
    padding: 10px;
    font-size: 14px;
    flex-grow: 1;
    background: transparent;
`;

export const LabelWrap = styled.div<{ $error?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--borer-line-color);
    position: relative;
    svg {
        margin-left: 10px;
        opacity: 0.8;
    }
    ${props => props.$error && `border : 1px solid #ff0000ad;`}
`;

export const ErrorMessage = styled.div`
    font-weight: bold;
    font-size: 12px;
    color: var(--color-error);
    opacity: 0.8;
`;
