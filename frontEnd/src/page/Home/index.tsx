import { Grid } from 'layout/Grid';

import ShootingStar from 'component/animations/ShootingStar';
import BackgroundImgCover from 'component/ui/BackgroundImgCover';
import * as S from './HomeStyle';
import ViewAnimation from 'component/animations/ViewAnimation';
import { VscProject } from 'react-icons/vsc';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';

const Home = () => {
    return (
        <>
            <S.HomeContainer>
                <BackgroundImgCover mainPage={true} imgSrc="/img/4.jpg">
                    <ShootingStar />
                </BackgroundImgCover>

                <Grid>
                    <ViewAnimation>
                        <S.TitleWrapper>
                            <S.MainPoint className="view-animation">
                                FRONT END & Web Publisher
                            </S.MainPoint>
                            <S.CustomDashBoardTitle $mobileBiger={true}>
                                PORTFOLIO
                            </S.CustomDashBoardTitle>
                            <S.CustomDashBoardTitle>
                                WEB DEVELOPER<S.Division>&lt;/&gt;</S.Division>
                            </S.CustomDashBoardTitle>
                        </S.TitleWrapper>
                        <S.BottomWrap>
                            <S.ButtomWrapper className="view-animation">
                                <S.CareerGoal>
                                    저의 포트폴리오에 방문해 주셔서 감사합니다.
                                    <br></br>
                                    더욱 전문성 있는 프론트엔드 개발자로
                                    성장하고자 합니다.
                                    <br></br>
                                    새로운 기술을 학습하며, 익숙해지는 것에
                                    전념하고 있습니다.<br></br>
                                </S.CareerGoal>

                                <S.MainButtonWrap>
                                    <S.EmbosingButton to="/about">
                                        <BsPersonCircle size={20} />
                                        About me
                                    </S.EmbosingButton>{' '}
                                    <S.EmbosingButton to="/board">
                                        {' '}
                                        <IoChatbubbleEllipsesSharp size={20} />
                                        Guest Board
                                    </S.EmbosingButton>{' '}
                                    <S.EmbosingButton to="/project">
                                        <VscProject size={20} />
                                        Web Project
                                    </S.EmbosingButton>
                                </S.MainButtonWrap>
                            </S.ButtomWrapper>

                            <S.BlogNewList
                                className="view-animation"
                                page="main"
                            />
                        </S.BottomWrap>
                        {/* <MainNavs /> */}
                        {/* <DashBoardTitle>
                    <b>FRONTEND DEVELOPER</b>
                </DashBoardTitle> */}
                    </ViewAnimation>{' '}
                </Grid>
            </S.HomeContainer>
        </>
    );
};

export default Home;
