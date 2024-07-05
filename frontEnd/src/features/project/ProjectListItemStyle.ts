import styled, { css } from 'styled-components';
import FadeInAnimation from 'component/animations/FadeInAnimation';
import { device } from 'config/DeviceConfig';

export const ProjectFadeinStyle = styled(FadeInAnimation)`
    margin-bottom: 2rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33.333% - 1.34rem);
    width: 100%;
    align-items: start;
    margin-right: 2rem;
    cursor: pointer;

    &:nth-child(3n + 2) {
        margin-right: 0rem;
    }

    img {
        transition: all 0.2s ease;
    }

    /* 랩탑 */
    @media ${device.laptop} {
        flex: 0 0 calc(50% - 1rem);
        &:nth-child(3n + 2) {
            margin-right: 2rem;
        }
        &:nth-child(2n + 2) {
            margin-right: 0rem;
        }
    }
    /* 모바일 */
    @media ${device.tablet} {
        margin-right: 0 !important;
        flex: auto;
        margin-bottom: 1rem;
        padding-bottom: 2.5rem;
    }

    &:hover {
        .projectItemImg {
            transform: scale(1.05);
        }
        .aniTarget {
            background: rgba(0, 0, 0, 0.3);
            svg {
                opacity: 1;
                transform: translateY(0px);
            }
        }
        img {
            /* transform: scale(1.1); */
        }
    }
`;

export const ProjectImgArea = styled.div<{ $backImg: string }>`
    width: 100%;
    padding-bottom: 70%;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    transition: all 0.5s ease;
    margin-right: 3rem;
    ${props =>
        props.$backImg &&
        css`
            background-image: url(${props.$backImg});
            background-size: cover;\
            background-position: center center;
        `}
`;

export const ProjectCompany = styled.div`
    font-size: 12px;
    margin-bottom: 3px;
    color: rgba(113, 113, 122);
    display: none;
`;
export const ProjectDescription = styled.div`
    font-size: 13px;
    margin-bottom: 14px;
    word-break: keep-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-description-color);
`;

export const ViewIconAnimation = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.5s ease;
    overflow: hidden;
    border-radius: 1rem;
    svg {
        opacity: 0;
        transform: translateY(40px);
        font-size: 2rem;
        color: #fff;
        filter: drop-shadow(0px 0px 10px);
        transition: all 0.3s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`;

export const ProjectItemHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.3rem;
    img {
        width: 15px;
    }
    margin-top: 1rem;
    font-size: 1rem;
    display: flex;
    font-weight: bold;
    letter-spacing: -0.7px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    color: ${({ theme }) => theme.textColor};
    @media ${device.tablet} {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const ProjectItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
`;
