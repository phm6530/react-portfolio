import { BoardWrapper } from '@features/Blog/BlogStyle';
import { Grid, PageWrapper } from '@layout/Grid';
import UserProfile from 'component/profile/UserProfile';
import DashBoard from 'component/ui/DashBoard/DashBoard';
import * as S from '@page/about/AboutStyle';
import * as ABOUTCONSTANS from 'constants/AboutConstancts';
import { SubTitle } from 'component/ui/Subtitle';
import Icon from 'component/icon/Icon';
import EmbosingButton from 'component/ui/EmbosingButton';
import { HashTag } from '@style/commonStyle';
import styled from 'styled-components';
import { device } from 'config/DeviceConfig';
import Motion from 'component/animations/Motion';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import { RiAwardFill } from 'react-icons/ri';
import { MdOutlineWork } from 'react-icons/md';
import ReactIcon from 'component/icon/ReactIcon';

const CustomGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const CustomBoardWrapper = styled(BoardWrapper)`
    margin-left: 3rem;
    @media ${device.laptop} {
        margin-left: 0;
    }
`;

const About = (): JSX.Element => {
    return (
        <>
            <PageWrapper>
                <DashBoard
                    pageTitle={'About'}
                    subComment={'"퍼블리셔와 개발자 사이 그어딘가"'}
                />
                <Motion.FadeInOut>
                    <CustomGrid>
                        <UserProfile />
                        <CustomBoardWrapper>
                            <S.AboutMeDeps>
                                <SubTitle>
                                    <div className="subText">
                                        <span className="point">HELLO!</span>
                                        <S.AniPoint
                                            className="point"
                                            style={{ marginRight: 'auto' }}
                                        >
                                            _
                                        </S.AniPoint>
                                    </div>
                                </SubTitle>

                                <S.AboutMe>
                                    <S.IconWrapper>
                                        <Icon
                                            src="/img/about/me2.png"
                                            alt="클라이언트"
                                            width={50}
                                        />
                                        안녕하세요! <br></br>더욱 전문적인 UX와
                                        기술을 반영하여 성장하는
                                        <span>FRONT END</span> 개발자가
                                        되려합니다.
                                    </S.IconWrapper>{' '}
                                    <br></br>
                                    <p>
                                        혼자서 능동적으로 해결하였던 문제 점들과
                                        퍼블리셔로서의 경험을 바탕으로
                                        프론트엔드 개발자로의 전환을 모색하고
                                        있으며, 이를 통해 사용자 경험을 개선하고
                                        더 나은 사용자 인터페이스를 제공하는 데
                                        기여하고자 합니다.
                                    </p>
                                    <br></br>
                                    <p>
                                        새로운 도전을 즐기며, 기술적 문제 해결에
                                        있어 유연한 접근을 지향합니다.
                                    </p>
                                    <p>
                                        이를 통해 조직의 기술적 성과를 끌어올릴
                                        수 있는 기회를 찾고자 도전하고 있습니다.
                                    </p>
                                    <br></br>
                                    <EmbosingButton to={'/board'}>
                                        <Icon
                                            src="img/common/talk2.png"
                                            alt="클라이언트"
                                            width={20}
                                        />
                                        방명록에 응원 한줄 남기기
                                    </EmbosingButton>{' '}
                                    <br></br>
                                    <br></br>
                                    <br></br>{' '}
                                </S.AboutMe>
                            </S.AboutMeDeps>
                            <S.AboutContentWrap>
                                <S.CertList>
                                    <S.AboutContentsTitle>
                                        <ReactIcon
                                            IconComponent={
                                                <AiFillSafetyCertificate />
                                            }
                                        />
                                        SKILL
                                    </S.AboutContentsTitle>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>ReactJs</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            React Toolkit, Zustand를 이용한 전역
                                            상태관리를 이해하고 있습니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            axios , useQuery를 이용하여 데이터의
                                            패치 mutation을 관리하며 staleTime,
                                            GcTime등을 이용하여 데이터의
                                            신선도를 체킹합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            useHookForm을 이용하여 request
                                            데이터를 관리합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            Hoc, Custom Hook을 주로 사용하며 VCA
                                            패턴을 사용합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            컴포넌트 분리에 관심이 많으며 재
                                            사용 가능하도록 추상화하여
                                            보일러플레이트를 최소화 시키려고
                                            노력합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            React를 이용한 디바운싱, 쓰로틀링을
                                            이해하고 useMemo, useCallback 과
                                            함께 최적화에 힘쓰고 있으며,
                                            Infinity Scroll을 useQuery나
                                            observer를 통하여 구현하고
                                            관리합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            fetching 간의 데이터 loading 등
                                            사용자에게 현 상황에 대해
                                            즉각피드백을 반영 하도록 노력하고
                                            있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>javaScript</HashTag>
                                            <HashTag>typeScript</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            ES6 문법을 사용하며, 프로미스
                                            ,스코프 ,클로저 개념을 이해하며 심도
                                            있게 공부 중에 있습니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            타입가드 | 유니온 | 제네릭을
                                            이용하여 데이터의 통일성, 안정화에
                                            힘쓰고 있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Css</HashTag>
                                            <HashTag>Scss</HashTag>
                                            <HashTag>Styled Component</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            flex, grid , position을 이해하고
                                            있으며, css 선택자 , 가상 선택자를
                                            활용합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            반응형 웹에 익숙하며 미디어 쿼리를
                                            주로 max-width기준으로 분기점을 나눠
                                            작업합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            동적 스타일링을 통해 사용자에게
                                            직관적이고 좋은 UX를 제공하기 위해
                                            고민합니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Mysql</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            WorkBench와 PhpMyAdmin을 주로
                                            사용합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            최대 3NF를 고려하여 테이블의 중복을
                                            최소화합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            Join과 Case End 문을 사용하여
                                            데이터를 정규화하고, 트랜잭션을
                                            이용해 작업 단위의 REDO/UNDO를
                                            이해합니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Php</HashTag>
                                            <HashTag>Express</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            SSR 형식의 Php를 이용하여 게시판,
                                            설문조사 툴 등을 구축한 경험이
                                            있습니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            Express를 통해 사용자 Token을
                                            관리하고 MVC패턴이용하여 Controller
                                            , Service , Model로 분리 하여 구조
                                            컨벤션을 지키려 노력합니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            쿼리스트링, 파라미터를 이용한
                                            구조화, 페이징을 다루며 , 데이터
                                            가공에 노력하고 있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Svn</HashTag>
                                            <HashTag>Git</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            전 회사에서 주로 SVN을 이용하여
                                            형상관리를 하였습니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            Git - Branch, Merge등을 이해하고
                                            있으며 협업 위해 익숙해지려고
                                            훈련하고 있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Adobe PhotoShop</HashTag>
                                            <HashTag>Illustrator</HashTag>
                                            <HashTag>Figma</HashTag>
                                            <HashTag>Adobe XD</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            Adobe XD를 주로 사용하였으며, 현재는
                                            Figma를 활용하여 UI 작업을 진행하고
                                            있습니다.
                                        </S.SkillText>
                                        <S.SkillText>
                                            Photo Shop을 이용한 보정 작업, Mask
                                            , filter 작업에 익숙합니다.{' '}
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>Centos 7</HashTag>
                                            <HashTag>Linux</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            Centos 7 + Tomcat을 이용하여 IDC,
                                            Home Server를 구축한 경험이
                                            있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>

                                    <S.SkillItem>
                                        <S.SkillList>
                                            <HashTag>관심..</HashTag>
                                        </S.SkillList>
                                        <S.SkillText>
                                            Next.js , Nest.js에 관심이 있습니다.
                                        </S.SkillText>
                                    </S.SkillItem>
                                </S.CertList>
                                <S.CertList>
                                    <S.AboutContentsTitle>
                                        <ReactIcon
                                            IconComponent={
                                                <AiFillSafetyCertificate />
                                            }
                                        />
                                        CERTIFICATE
                                    </S.AboutContentsTitle>
                                    <S.CertWrap>
                                        {ABOUTCONSTANS.CERTS.map((e, idx) => {
                                            return (
                                                <HashTag key={`cert_${idx}`}>
                                                    {e}
                                                </HashTag>
                                            );
                                        })}
                                    </S.CertWrap>
                                </S.CertList>{' '}
                                <S.CertList>
                                    <S.AboutContentsTitle>
                                        {' '}
                                        <ReactIcon
                                            IconComponent={<MdOutlineWork />}
                                        />
                                        Experience
                                    </S.AboutContentsTitle>
                                    {ABOUTCONSTANS.EXPERIENCE.map((e, idx) => {
                                        return (
                                            <S.CertItem key={`cert_${idx}`}>
                                                <S.CompanyTitle
                                                    $idx={idx === 0}
                                                >
                                                    {e.company}
                                                </S.CompanyTitle>
                                                <S.CompanyDate>
                                                    {e.date}
                                                </S.CompanyDate>
                                                <S.WorkList>
                                                    {e.workList.map(
                                                        (work, idx) => {
                                                            return (
                                                                <S.WorkItem
                                                                    key={`work${idx}`}
                                                                    style={{
                                                                        marginTop:
                                                                            '10px',
                                                                    }}
                                                                >
                                                                    <S.Client>
                                                                        {
                                                                            work.work
                                                                        }
                                                                    </S.Client>
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                'flex',
                                                                            flexDirection:
                                                                                'column',
                                                                        }}
                                                                    >
                                                                        {work.summary.map(
                                                                            (
                                                                                item,
                                                                                idx,
                                                                            ) => {
                                                                                return (
                                                                                    <div
                                                                                        key={
                                                                                            idx
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item
                                                                                        }
                                                                                    </div>
                                                                                );
                                                                            },
                                                                        )}
                                                                    </div>
                                                                </S.WorkItem>
                                                            );
                                                        },
                                                    )}
                                                </S.WorkList>
                                            </S.CertItem>
                                        );
                                    })}
                                </S.CertList>
                                <S.CertList>
                                    <S.AboutContentsTitle>
                                        {' '}
                                        <ReactIcon
                                            IconComponent={<IoSchool />}
                                        />
                                        Education
                                    </S.AboutContentsTitle>
                                    {ABOUTCONSTANS.EDUCATION.map((e, idx) => {
                                        return (
                                            <HashTag key={`cert_${idx}`}>
                                                {e.name}
                                            </HashTag>
                                        );
                                    })}
                                </S.CertList>
                                <S.CertList>
                                    <S.AboutContentsTitle>
                                        {' '}
                                        <ReactIcon
                                            IconComponent={<RiAwardFill />}
                                        />
                                        AWARD
                                    </S.AboutContentsTitle>
                                    {ABOUTCONSTANS.AWARD.map((e, idx) => {
                                        return (
                                            <HashTag key={`cert_${idx}`}>
                                                {e}
                                            </HashTag>
                                        );
                                    })}
                                </S.CertList>
                            </S.AboutContentWrap>
                        </CustomBoardWrapper>
                    </CustomGrid>
                </Motion.FadeInOut>
            </PageWrapper>
        </>
    );
};

export default About;
