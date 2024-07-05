import styled, { css } from 'styled-components';

const Icon = styled.div<{ $color?: string }>`
    display: inline-block;
    color: ${({ $color }) => {
        if ($color) {
            return { $color };
        } else {
            return css`#6e58dc`;
        }
    }};
`;

const ReactIcon: React.FC<{ IconComponent: JSX.Element; color?: string }> = ({
    IconComponent,
    color,
}) => {
    return <Icon $color={color}>{IconComponent}</Icon>;
};

export default ReactIcon;
