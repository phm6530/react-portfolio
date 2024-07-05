import styled, { css } from 'styled-components';
interface CustomProps {
    $error?: boolean;
}
// 공통 스타일 컴포넌트
const commonStyle = css<CustomProps>`
    padding: 5px 10px;
    border-radius: 0.5em;

    border: 1px solid var(--borer-line-color);
    font-size: 14px;
    ${props => props.$error && `border: 1px solid var(--color-error);`}
    background: var(--background-field-border-color);
    &:focus {
        background: transparent !important;
    }
`;

const InputStyle = styled.input<CustomProps>`
    ${commonStyle}
`;

const TextAreaStyle = styled.textarea<CustomProps>`
    ${commonStyle}
`;

const InputLabel = styled.div`
    font-weight: 500;
    font-size: 16px;
    width: 8rem;
    margin-bottom: 0.3rem;
`;

export { InputStyle, TextAreaStyle, InputLabel };
