import styled, { keyframes } from 'styled-components';
import BlogNewPostList from 'features/Blog/BlogNewPostList/BlogNewPostList';
import { device } from 'config/DeviceConfig';
import DashBoardTitle from 'component/ui/DashBoard/DashBoardTitle';
import { Link } from 'react-router-dom';

export const infiniteBgAni = keyframes`
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 120%;
  }
`;

export const HomeContainer = styled.div`
    position: relative;
    padding-top: 13rem;
    padding-bottom: 8rem;
    overflow: hidden;
    background-position: center bottom;
    background-repeat: no-repeat;
    /* height: 100vh; */
    animation: ${infiniteBgAni} 10s cubic-bezier(0.2, 0.56, 0.38, 0.41) infinite
        forwards alternate;
    background-size: cover;
    min-height: 100vh;

    @media ${device.tablet} {
        padding-top: 13rem;
    }
`;

export const Division = styled.span`
    color: #6e31e1;
    font-weight: 400;
    font-size: 50px;
    @media ${device.tablet} {
        font-size: 2rem;
        margin-top: 1rem;
    }
`;

export const CareerGoal = styled.div`
    margin-top: 40px;
    padding-top: 20px;
    font-style: normal;
    font-size: 16px;
    line-height: 1.7rem;
    color: #d1d2eb;
    margin-bottom: 70px;
    position: relative;
    word-break: keep-all;
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        border-top: 1px solid #898989;
        width: 20px;
    }

    @media ${device.tablet} {
        font-size: 14px;
        width: 100%;
        padding-top: 40px;
        margin-top: 0;
        line-height: 1.7rem;
        margin-top: 20px;
    }
`;

export const MainPoint = styled.div`
    background: var(--gradient-title-color);
    color: transparent;
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 700;
    font-family: 'Inter';
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 1rem;
    @media ${device.tablet} {
        font-size: 15px;
    }
`;

type tst = {
    $mobileBiger?: boolean;
};
export const CustomDashBoardTitle = styled(DashBoardTitle)<tst>`
    line-height: 4rem;
    font-size: 4.5rem;
    @media ${device.laptop} {
        font-size: 4rem;
        line-height: 4rem;
    }
    @media ${device.tablet} {
        font-size: ${({ $mobileBiger }) => ($mobileBiger ? '13vw' : '9.5vw')};
        line-height: 11vw;
        margin-right: 0;
    }
`;

export const TitleWrapper = styled.div``;

export const ButtomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const MainButtonWrap = styled.div`
    display: flex;
    @media ${device.tablet} {
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;

export const EmbosingButton = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 1rem;
    border-radius: 5px;
    padding: 15px 30px;
    margin-right: 0.6rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8rem;
    font-family: var(--fontfamily-type-1);
    color: var(--white);
    &:hover {
        color: rgb(162 197 244);
        border: 1px solid rgb(162 197 244);
        cursor: pointer;
    }
    svg {
        margin-right: 1rem;
    }
`;

export const BottomWrap = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.laptop} {
        flex-direction: column;
    }
`;

export const BlogNewList = styled(BlogNewPostList)`
    /* background: #00000024; */
    /* padding: 0.6rem 2rem; */
    border-radius: 1rem;
    margin-left: 2rem;
    width: 35%;
    @media ${device.laptop} {
        margin-left: 0;
        width: 100%;
    }
`;
