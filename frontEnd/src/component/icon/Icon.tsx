//login Icon
// import { IoPersonCircleSharp } from 'react-icons/io5';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import { TiDelete } from 'react-icons/ti';
// import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
// import { RxQuestionMarkCircled } from 'react-icons/rx';
import { MdCancel } from 'react-icons/md';

import styled from 'styled-components';

const IconStyle = styled.div<{ $width?: number }>`
    display: inline-block;
    margin-right: 10px;
    img {
        width: ${({ $width }) => ($width ? `${$width}px` : '20px')};
    }
`;

interface IconProps {
    src: string;
    alt: string;
    width?: number;
}

const Icon: React.FC<IconProps> = ({ src, alt, width }) => {
    return (
        <IconStyle $width={width}>
            <img src={src} alt={alt} />
        </IconStyle>
    );
};

export default Icon;
export { MdCancel };
