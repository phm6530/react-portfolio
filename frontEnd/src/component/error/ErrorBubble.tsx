import styled, { keyframes } from 'styled-components';

const errorAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const ErrorStyle = styled.div`
    color: #ff1818;
    background: #fff;
    padding: 4px 10px;
    border-radius: 10px;
    position: absolute;
    display: inline-block;
    bottom: 100%;
    right: 0px;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    border: 1px solid #ff1818;
    animation: cEtoHV 0.2s ease forwards;
    animation: ${errorAnimation} 0.2s ease forwards;
    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        bottom: -6px;
        z-index: 0;
        border-bottom: 1px solid red;
        border-right: 1px solid red;
        left: 40px;
        background: #fff;
        transform: rotate(45deg);
    }
`;

const ErrorBubble: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ErrorStyle>{children}</ErrorStyle>;
};
export default ErrorBubble;
