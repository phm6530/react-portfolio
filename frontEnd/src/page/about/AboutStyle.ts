import { device } from 'config/DeviceConfig';
import styled, { keyframes } from 'styled-components';

export const BoxTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const AboutContentWrap = styled.div`
    width: 100%;
`;

export const CertList = styled.div`
    background-color: var(--button-solide-type-1);
    padding: 1rem;
    border-radius: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid var(--borer-line-color);
    @media ${device.tablet} {
        padding: 2rem 1rem;
    }
`;

export const AboutContentsTitle = styled.div`
    margin-bottom: 1rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    svg {
        margin-right: 0.3rem;
    }
`;

export const AboutMeDeps = styled.div``;

export const AboutMeTitle = styled.div``;

export const IconWrapper = styled.div`
    align-items: center;
    font-size: 1.3rem;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    word-break: keep-all;
    span {
        background: var(--gradient-aboutGradient-color);
        color: transparent;
        font-weight: bold;
        background-clip: text;
        -webkit-background-clip: text;
        display: inline-flex;
        margin: 0 10px;
    }
    @media ${device.tablet} {
        font-size: 1.2rem;
        line-height: 2rem;
    }
`;

export const AboutMe = styled.div`
    font-size: 16px;

    align-items: center;
    border-radius: 1rem;
    p {
        color: var(--color-aboutfont-color);
        line-height: 2rem;
    }
    @media ${device.tablet} {
        font-size: 15px;
        margin: 0px 10px;
    }
    @media ${device.mobileL} {
        margin: 0px 0px;
        font-size: 14px;
    }
`;

export const CertItem = styled.div`
    margin-bottom: 0.3rem;
    position: relative;
    display: inline-block;
    padding: 4px 9px;
    margin-right: 11px;
    border-radius: 0.3rem;
    font-size: 14px;
    /* background: rgb(69 70 255); */
    display: flex;
    flex-direction: column;
    /* color: #fff;*/
    color: rgb(211 211 232);
    /* margin-bottom: 1.5rem; */
`;

export const cursor = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const AniPoint = styled.div`
    animation: ${cursor} 0.9s ease infinite alternate;
`;

export const WorkList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CompanyTitle = styled.div<{ $idx?: boolean }>`
    font-size: 1.2rem;
    color: var(--color-aboutfont-color);
    margin-top: ${({ $idx }) => ($idx ? ` 0px` : '1.5rem')};
`;

export const CompanyDate = styled.div`
    opacity: 0.6;
    white-space: pre-wrap;
    color: var(--color-aboutfont-color);
`;

export const WorkItem = styled.div`
    margin-left: 1rem;
    position: relative;
    color: var(--color-aboutfont-color);
    &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background: #6379b2;
        left: -15px;
        top: 8px;
        border-radius: 100%;
    }
`;

export const Client = styled.div`
    /* text-decoration: underline; */
    color: var(--color-aboutfont-color);
`;

export const CertWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 3rem;
    font-size: 14px;
`;
export const SkillText = styled.p`
    margin-left: 1rem;
    position: relative;
    color: var(--color-aboutfont-color);
    margin-bottom: 0.5rem;
    &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background: #6379b2;
        left: -15px;
        top: 8px;
        border-radius: 100%;
    }
    line-height: 1.7rem;
`;

export const SkillList = styled.div`
    margin-bottom: 0.5rem;
`;
