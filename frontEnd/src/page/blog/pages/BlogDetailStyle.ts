import { device } from 'config/DeviceConfig';
import styled from 'styled-components';
import PostTimestamp from 'component/ui/PostTimestamp';

export const PostTitle = styled.div`
    font-size: 2rem;
    padding: 1rem 0;
    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`;
export const CateGroy = styled.div`
    opacity: 0.3;
`;
export const PostInfo = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .create_at {
        opacity: 0.6;
        display: inline-block;
        margin-left: 0.6rem;
        margin-right: auto;
    }
    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const ControlBtnWrap = styled.span``;

export const UserPictrue = styled.div`
    border-radius: 100%;
    width: 40px;
    overflow: hidden;
    border: 3px solid var(--borer-line-color);
    margin-right: 1rem;
    img {
        width: 100%;
    }
`;

export const PostDetailHeader = styled.div`
    border-bottom: 1px solid var(--borer-line-color);
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const QuillViewWrapper = styled.div`
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--borer-line-color);
    padding-bottom: 1rem;
`;

export const SummaryDataAlign = styled(PostTimestamp)`
    margin-right: auto;
    margin-left: 1rem;
`;
