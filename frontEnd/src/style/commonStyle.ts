import { device } from 'config/DeviceConfig';
import styled, { css } from 'styled-components';

const FlexRowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const FlexColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
`;

const FlexWrapDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const SubTitleTextStyle = styled.span`
    font-size: 14px;
    line-height: 17px;
    color: #4f5067;
    justify-content: space-between;
    font-size: 14px;
    letter-spacing: -0.05em;
    font-weight: 500;
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
    color: #8d93ac;
    width: 100%;
    align-items: center;
    position: relative;
`;

const MarginBottom1rem = styled.div`
    margin-bottom: 1rem;
`;

const FlexColumnBetween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const SubDescription = styled.div`
    margin-bottom: 1rem;
    font-size: 0.9rem;
    opacity: 0.7;
`;

const SubTitle = styled.div`
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -1px;
    /* font-family: 'Poppins'; */
    color: #34323f;
    /* font-weight: bold; */
`;

const SubDepsTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    letter-spacing: -0.09em;

    color: #516285;
`;

/* Rectangle 812 */
const BoxStyle = styled.div`
    box-shadow: 0px 4px 20.9px rgba(0, 122, 149, 0.07);
    border-radius: 31px;
    width: 100%;
    padding: 1.3rem 2rem;
`;

const LeftWrap = styled.div`
    /* width: 30%; */
`;

const RightWrap = styled.div`
    height: 100%;
    display: flex;
    width: 100%;

    transition: all 0.5s ease;
    /* background: ${({ theme }) => theme.backgroundColor}; */
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 1.5rem;
    /* box-shadow: var(--box-shadow-style); */
    flex-direction: column;
    @media ${device.tablet} {
        padding: 2rem 0rem;
    }
`;

const LeftLayOut = styled.div`
    border-radius: 1em;
    box-shadow: 50px 50px 55px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
    background: #fff;
    margin-right: 2rem;
    height: 70vh;
    padding: 2rem;
    width: 17rem;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* flex-grow: 1; */
    width: 100%;
`;

const HashTag = styled.div<{ $page?: string }>`
    align-items: center;
    display: inline-flex;
    font-weight: 500;

    padding: 6px 10px;
    border-radius: 27px;
    color: var(--color-hash-tag-text);
    background: var(--color-hash-tag-background);

    margin-right: 0.6rem;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    align-items: center;
    margin-bottom: 0.7rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    ${({ $page }) =>
        $page === 'project'
            ? css`
                  font-size: 12px;
              `
            : css`
                  font-size: 13px;
                  font-weight: var(--bold);
              `};

    svg {
        margin-left: 0.4rem;
    }
`;

export {
    FlexColumnBetween,
    SubTitleTextStyle,
    SubTitle,
    FlexRowDiv,
    FlexRow,
    HashTag,
    FlexColumnDiv,
    FlexWrapDiv,
    MarginBottom1rem,
    SubDescription,
    SubDepsTitle,
    BoxStyle,
    LeftWrap,
    RightWrap,
    LeftLayOut,
};
