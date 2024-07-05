import styled, { css } from 'styled-components';
import { device } from 'config/DeviceConfig';
import Link from '@layout/Link';

interface ListProps {
    $scrollOver?: boolean;
    $darkMode?: boolean;
    $path?: boolean;
    $not?: boolean;
    $logout?: boolean;
    $active?: boolean;
}

const ScrollOverColor = ({ $scrollOver, $darkMode, $path }: ListProps) => {
    if (!$path) {
        if ($scrollOver) {
            return 'var(--Nav-color)';
        } else if (!$scrollOver && !$darkMode) {
            return 'rgb(182, 190, 201)';
        }
    }
};

const afterStyle = css`
    content: '';
    display: block;
    width: 5px;
    height: 30px;
    background: var(--white);
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
`;

export const List = styled(Link)<ListProps>`
    color: ${({ $scrollOver, $darkMode, $path }) =>
        ScrollOverColor({ $scrollOver, $darkMode, $path })};

    ${({ $active }) =>
        $active &&
        css`
            font-weight: bold;
            color: rgb(162 197 244);
        `}

    @media ${device.laptopL} {
        padding: 17px 0;
        margin-left: 2rem;
        position: relative;

        ${({ $logout }) =>
            $logout &&
            css`
                font-family: 'Pretendard-Regular';
                font-size: 12px;
            `};

        ${({ $not, $active }) => {
            if (!$not) {
                if ($active) {
                    return css`
                        color: var(--white);
                        transform: translateX(20px);
                        &::after {
                            ${afterStyle}
                            opacity: 1;
                        }
                    `;
                }
                return css`
                    &:hover {
                        color: var(--white);
                        transform: translateX(20px);
                        &::after {
                            opacity: 1;
                        }
                    }

                    &::after {
                        ${afterStyle}

                        opacity: 0;
                    }
                `;
            }
        }}
        transition:
                        color 0.5s cubic-bezier(0.1, 0.45, 0, 1.09),
                        all 0.5s cubic-bezier(0.1, 0.45, 0, 1.09);
    }
`;

export const Header = styled.header<ListProps>`
    position: fixed;
    z-index: 10;
    width: 100%;
    backdrop-filter: blur(10px);
    border-bottom: var(--Nav-navBorder);

    ${({ $scrollOver, $path, $darkMode }) => {
        if (!$path) {
            if ($scrollOver && !$darkMode) {
                return css`
                    background: var(--Nav-Background-color);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                `;
            }
        }
        return css`
            color: rgb(182, 190, 201);
        `;
    }}
    transition: background 1s cubic-bezier(0, 0.88, 0, 1.03);
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptopL} {
        padding: 15px 0;
    }
`;

export const MyName = styled.div<{ $scrollOver: boolean; $darkMode: boolean }>`
    color: rgb(182, 190, 201);
    font-family: var(--fontfamily-type-2);
    font-weight: bold;
    color: ${({ $scrollOver, $darkMode }) =>
        ScrollOverColor({ $scrollOver, $darkMode })};
`;

export const LinkWrapper = styled.div<{ $toggle: boolean }>`
    display: flex;
    @media ${device.laptopL} {
        position: fixed;
        width: 100%;
        max-width: 500px;
        display: flex;
        height: auto;
        height: 100vh;
        right: 0%;
        top: 0;
        background-color: #1b1e23;
        flex-direction: column-reverse;
        justify-content: flex-end;

        right: ${({ $toggle }) => ($toggle ? '0px' : '-500px')};
        transition:
            transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            right 0.75s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    @media ${device.tablet} {
        width: 80%;
        border-left: 1px solid var(--borer-line-color);
    }
`;

export const UiStyle = styled.ul<{ $link?: boolean }>`
    display: flex;
    align-items: center;
    ${({ $link }) => $link && 'margin-right : 4rem;'}

    @media ${device.laptopL} {
        margin-bottom: 2rem;
        padding-top: 7px;
        ${({ $link }) =>
            !$link
                ? css`
                      flex-direction: row;
                  `
                : css`
                      flex-direction: column;
                      align-items: flex-start;
                  `}
    }
`;
