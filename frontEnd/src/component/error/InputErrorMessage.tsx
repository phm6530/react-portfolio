import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: var(--color-error);
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.8;
`;

const InputErrorMessage: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <ErrorMessage>{children}</ErrorMessage>;
};

export default InputErrorMessage;
