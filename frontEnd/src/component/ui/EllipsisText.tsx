import styled from 'styled-components';

const EllipsisTextStyle = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    width: 100%;
`;

const EllipsisText: React.FC<{
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}> = ({ className, children, onClick }) => {
    return (
        <EllipsisTextStyle onClick={onClick} className={className}>
            {children}
        </EllipsisTextStyle>
    );
};

export default EllipsisText;
