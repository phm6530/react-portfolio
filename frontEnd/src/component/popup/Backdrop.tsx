import { device } from 'config/DeviceConfig';
import React from 'react';
import styled from 'styled-components';

const BackdropStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000059;
    z-index: 10;
    top: 0;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    left: 0;
    display: none;
    @media ${device.laptopL} {
        display: block;
    }
`;

const BackDrop: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return <BackdropStyle onClick={onClick} />;
};

export default BackDrop;
