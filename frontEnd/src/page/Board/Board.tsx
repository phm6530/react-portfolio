import styled from 'styled-components';

import { Grid, PageWrapper } from '@layout/Grid';
import { RightWrap } from '@style/commonStyle';
import { SubTitle } from 'component/ui/Subtitle';

import BoardCommentForm from '@features/Board/BoardCommentForm/BoardCommentForm';
import DashBoard from 'component/ui/DashBoard/DashBoard';
import UserProfile from 'component/profile/UserProfile';
import BoardCommentList from '@features/Board/BoardCommentList/BoardCommentList';
// import FadeInAnimation from 'component/animations/FadeInAnimation';
import Motion from 'component/animations/Motion';
import { device } from 'config/DeviceConfig';

const PageText = styled.div`
    word-break: keep-all;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 20px;

    @media ${device.tablet} {
        margin-bottom: 30px;
    }
`;

const BoardDashBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    .tester {
        width: 15rem;
        border-radius: 1em;
        height: 350px;
        margin-right: 3rem;
        box-shadow: 3px 21px 17px rgb(0 0 0 / 25%);
    }
`;

const CustomGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const CustomRightWrap = styled(RightWrap)`
    margin-left: 3rem;
    @media ${device.laptop} {
        margin-left: 0;
    }
`;
export default function Board(): JSX.Element {
    return (
        <>
            <PageWrapper>
                {/* Header */}
                <DashBoard
                    pageTitle={'Board'}
                    subComment={'"Guest Board"  한마디 부탁드려요"'}
                />
                {/* Body */}{' '}
                <Motion.FadeInOut>
                    <CustomGrid>
                        {/* Prifile */}
                        <UserProfile />
                        <CustomRightWrap>
                            <BoardDashBoard>
                                <SubTitle>
                                    <div className="subText">
                                        <span className="point">
                                            GUEST BOARD
                                        </span>
                                    </div>
                                </SubTitle>
                                <PageText>
                                    bcrypt를 이용하여 암호화 저장하고 있으며
                                    해싱된 비밀번호 이외 어떠한 정보도 수집하지
                                    않습니다.
                                </PageText>
                            </BoardDashBoard>

                            {/* addForm  */}

                            <BoardCommentForm />

                            {/* BoardComment */}
                            <BoardCommentList />
                        </CustomRightWrap>{' '}
                    </CustomGrid>
                </Motion.FadeInOut>
            </PageWrapper>
        </>
    );
}
