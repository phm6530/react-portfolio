import styled, { keyframes } from 'styled-components';
import { LuSunDim } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5';

import useStore from 'store/zustandStore';
import useScrollY from '@hooks/useScrollY';
import { device } from 'config/DeviceConfig';

const DarkmodeButton = styled.div<{ $scrollOver: boolean }>`
    border-radius: 1em;
    background: transparent;
    border: 0;
    background: transparent;
    color: #fff;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 3px 6px;
    cursor: pointer;
    overflow: hidden;
    width: 60px;
    height: 30px;
    border: 2px solid var(--border-darkMode-color);
    /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); */
    margin-right: auto;
    &:active {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);
    }
    @media ${device.laptopL} {
        margin-right: initial;
        margin-left: 2rem;
    }
`;
const IconAnimation = keyframes`
    from{
        opacity: 0;
        transform: scale(.5);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`;

const DarkModeIcon = styled.div<{ $darkMode: boolean; $scrollOver: boolean }>`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 3px;
    display: flex;
    justify-content: center;
    border-radius: 5em;
    transition: all 0.3s ease;
    align-items: center;

    svg {
        animation: ${IconAnimation} 0.3s ease;
        ${({ $scrollOver, $darkMode }) => {
            if ($scrollOver && !$darkMode) {
                return 'color : #4e4e4e';
            }
        }}
    }

    ${props =>
        props.$darkMode
            ? ` left:calc(100% - 27px);  background: #5b5b5b;`
            : `background: #ffffff4a; color: #fff;`}

    ${({ $scrollOver, $darkMode }) => {
        if ($scrollOver && !$darkMode) {
            return 'background : #dddddd';
        }
    }}
`;

export default function DarkModeBtn() {
    const darkMode = useStore(state => state.darkMode);
    const darkmodeToggle = useStore(state => state.darkmodeToggle);
    const { scrollOver } = useScrollY(300);

    const modeHandler = () => {
        darkmodeToggle();
    };

    return (
        <DarkmodeButton $scrollOver={scrollOver} onClick={() => modeHandler()}>
            <DarkModeIcon $darkMode={darkMode} $scrollOver={scrollOver}>
                {darkMode ? <IoMoon size={'15'} /> : <LuSunDim size={'20'} />}
            </DarkModeIcon>
        </DarkmodeButton>
    );
}
