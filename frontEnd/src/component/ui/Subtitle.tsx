import { device } from 'config/DeviceConfig';
import React from 'react';
import styled from 'styled-components';

const SubTitleStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    /* margin-bottom: 1.5rem; */
    align-items: center;
    .subText {
        font-size: 2rem;
        line-height: 1.1em;
        font-weight: bold;
        flex-grow: 1;
        font-family: 'Montserrat';
        display: flex;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: space-between;
        .point {
            background: var(--gradient-aboutGradient-color);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            margin-right: 0.5rem;
            font-family: 'Montserrat';
        }

        @media ${device.tablet} {
            font-size: 1.4rem;
        }
    }
    img {
        width: 35px;
        margin-right: 10px;
    }
`;

const BigSubTitleStyle = styled.div``;

interface SubTitleProps {
    className?: string;
    children: React.ReactNode;
}

interface BigSubTitleProps {
    children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ className, children }) => {
    return <SubTitleStyle className={className}>{children}</SubTitleStyle>;
};

function BigSubTitle({ children }: BigSubTitleProps): React.ReactElement {
    return <BigSubTitleStyle>{children}</BigSubTitleStyle>;
}

export { BigSubTitle, SubTitle };
