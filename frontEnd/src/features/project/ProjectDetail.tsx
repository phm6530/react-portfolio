import 'quill/dist/quill.snow.css';

import { useNavigate } from 'react-router-dom';

import { Button } from 'component/ui/Button';
import QuillView from 'component/editor/QuillView';
import ProjectDetailControlsWrap from '@features/project/ProjectDetailControls/ProjectDetailControlsWrap';
import {
    ProjectThumbNail,
    CustumStyle,
    ProjectSummary,
    ProjectViewFooter,
    SkillWrapper,
    SKill,
    SummaryType,
    SummaryWrapper,
    SummaryWrap,
    ProjectTitle,
    ProjectDescription,
} from '@features/project/ProjectDetailStyle';
import { ProjectPostProps } from '@type/ProjectTypes';
import { IMG_URL } from 'constants/apiUrl';
import styled from 'styled-components';

import ProjectNextPrevNav from '@features/project/ProjectNextPrevNav';
import Prograssbar from 'component/ui/Prograssbar';
import Icon from 'component/icon/Icon';
import FadeInAnimation from 'component/animations/FadeInAnimation';
import EmbosingButton from 'component/ui/EmbosingButton';
import { HashTag } from '@style/commonStyle';
import { device } from 'config/DeviceConfig';
import useStore from 'store/zustandStore';
const DepsProjectSummary = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
const ProgassWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 45%;
    @media ${device.tablet} {
        width: 100%;
        flex-direction: column;
    }
`;

const PrograssTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0.4rem;
`;

const Title = styled.div`
    display: inline-block;
    background: var(--gradient-aboutGradient-color);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
`;

const ProjectDetail: React.FC<ProjectPostProps> = props => {
    const navigate = useNavigate();
    const login = useStore(state => state.userAuth.login);

    const {
        projectKey,
        title,
        company,
        skill,
        startDate,
        projectUrl,
        description,
        endDate,
        projectDescription,
        thumbnail,
        projectRoles,
    } = props;

    return (
        <>
            <CustumStyle>
                <ProjectSummary>
                    <div>
                        <ProjectTitle>
                            <Title> {title}</Title>
                        </ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                    </div>
                    {/* <HashtagArea>
                        {hashtag.map((e: string, idx: number) => {
                            return (
                                <HashTag
                                    className="hashTag"
                                    key={`hash-${idx}`}
                                >{`# ${e}`}</HashTag>
                            );
                        })}
                    </HashtagArea> */}
                    {login && (
                        <div>
                            {projectKey && (
                                <ProjectDetailControlsWrap
                                    projectKey={projectKey}
                                />
                            )}
                        </div>
                    )}
                </ProjectSummary>
                <DepsProjectSummary>
                    <SummaryWrap>
                        <ProjectThumbNail
                            $thumbNail={`${IMG_URL}/${thumbnail}`}
                        />

                        <Wrapper>
                            <SummaryWrapper>
                                <SummaryType>
                                    {' '}
                                    <Icon
                                        src="/img/project/icon/client.png"
                                        alt="클라이언트"
                                    />{' '}
                                    클라이언트
                                </SummaryType>
                                <div className="project_date">
                                    <SKill>{company}</SKill>
                                </div>
                            </SummaryWrapper>
                            <SummaryWrapper>
                                <SummaryType>프로젝트 기간</SummaryType>

                                <div className="project_date">
                                    <SKill>
                                        {startDate?.toString()} -{' '}
                                        {endDate?.toString()}
                                    </SKill>
                                </div>
                            </SummaryWrapper>
                            <SummaryWrapper style={{ width: '100%' }}>
                                <SummaryType>사용스킬 </SummaryType>

                                <SkillWrapper>
                                    {skill.map((e: string, idx: number) => {
                                        // 첫 문자를 대문자로 변환하고 나머지 문자열과 이어붙입니다.
                                        const fullString =
                                            e.charAt(0).toUpperCase() +
                                            e.slice(1);
                                        return (
                                            <HashTag key={idx}>
                                                {fullString}
                                            </HashTag>
                                        );
                                    })}
                                </SkillWrapper>
                            </SummaryWrapper>

                            <SummaryWrapper style={{ width: '100%' }}>
                                <SummaryType>
                                    {/* <Icon
                                        src="/img/project/icon/grape.png"
                                        alt="시계 아이콘1"
                                    /> */}
                                    참여도
                                </SummaryType>

                                {projectRoles.map((e, idx) => {
                                    return (
                                        <ProgassWrapper key={idx}>
                                            <PrograssTitle>
                                                {e.roleName}
                                            </PrograssTitle>
                                            <Prograssbar
                                                percent={e.rolePercent}
                                                key={idx}
                                            />
                                        </ProgassWrapper>
                                    );
                                })}
                            </SummaryWrapper>
                            <SummaryWrapper>
                                {/* <Src onClick={() => projectView(projectUrl)}>
                                    {projectUrl}
                                </Src> */}
                                <EmbosingButton to={projectUrl}>
                                    <Icon
                                        src="/img/common/arrow2.png"
                                        alt="클라이언트"
                                        width={20}
                                    />
                                    사이트 보러가기
                                </EmbosingButton>{' '}
                            </SummaryWrapper>
                        </Wrapper>
                    </SummaryWrap>
                </DepsProjectSummary>{' '}
                {/* quill-view */}
                <QuillView contents={projectDescription} />{' '}
                <Button.Type onClick={() => navigate('/project')}>
                    &lt;&nbsp;&nbsp; 목록으로
                </Button.Type>{' '}
            </CustumStyle>{' '}
            <FadeInAnimation>
                <ProjectViewFooter>
                    ※ 본 게시물은 상업적 목적이 아닌 포트폴리오 목적으로만
                    사용됩니다. 아직 공개되지 않은 작업물은 포함하지 않으며,
                    오직 공개된 작업물만을 게시합니다.
                </ProjectViewFooter>
                <ProjectNextPrevNav />
            </FadeInAnimation>
        </>
    );
};

export default ProjectDetail;
