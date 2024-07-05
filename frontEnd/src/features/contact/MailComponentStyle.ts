import styled, { keyframes } from 'styled-components';
export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    input,
    textarea {
        width: 100%;
    }
    input[type='radio'] {
        width: auto;
        visibility: hidden;
        display: none;
    }
    label {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

export const FieldLabel = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
    span {
        font-size: 12px;
        opacity: 0.5;
        font-weight: normal;
    }
`;

const ani = keyframes`
    from{
        transform: translateX(40px);
        opacity: 0;
    }
    to{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const ContactContents = styled.div`
    opacity: 0;
    flex-grow: 1;
    /* background: ${({ theme }) => theme.backgroundColor}; */
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    animation: ${ani} 0.5s 0.2s ease forwards;
`;

export const InputMargin = styled.div`
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const RadioLabel = styled.label<{ $check: boolean }>`
    display: inline-flex;
    padding: 7px 15px;
    border-radius: 2em;
    margin-right: 10px;
    align-items: center;
    background: var(--background-category-color);
    cursor: pointer;
    svg {
        opacity: 0.3;
    }
    span {
        margin-left: 20px;
        font-size: 14px;
        ${props => props.$check && 'color : #fff;'}
    }
    ${({ $check }) =>
        $check &&
        `
        background: #000;
        svg{opacity: 1;color: #fff;}`};
`;

export const RadioWrap = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 1.5rem;
`;
