import useFetchNextPrevList from '@features/project/hooks/useFetchNextPrevList';
import Thumbnail from 'component/ui/Thumbnail';
import { device } from 'config/DeviceConfig';
import { IMG_URL } from 'constants/apiUrl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PrevnextNav = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    img {
        width: 15%;
        border-radius: 10px;
    }
`;

const PrevnextTitle = styled.div`
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
    @media ${device.tablet} {
        font-size: 13px;
    }
`;

const PrevnextSummary = styled.div`
    margin-left: 1rem;
    @media ${device.tablet} {
        margin-left: 0rem;
        width: 60%;
    }
`;

const PrevnextSummaryWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
`;

const ThumbNailStyle = styled(Thumbnail)`
    width: 17%;
    padding-bottom: 11%;
    margin-right: 1.5rem;
    @media ${device.tablet} {
        width: 40%;
        padding-bottom: 20%;
    }
`;

const PrevnextDescription = styled.div`
    opacity: 0.5;
    font-size: 12px;
    @media ${device.tablet} {
        font-size: 13px;
    }
`;

const ProjectNextPrevNav = () => {
    const { data: list } = useFetchNextPrevList();
    const navigate = useNavigate();

    return (
        <>
            {list &&
                list.map((item, key) => {
                    const isPage =
                        item.isPage === 'prev' ? '이전 글' : '다음 글';

                    return (
                        <Wrap key={key}>
                            <PrevnextNav>{isPage}</PrevnextNav>
                            <PrevnextSummaryWrapper
                                onClick={() =>
                                    navigate(`/project/${item.project_key}`)
                                }
                            >
                                <ThumbNailStyle
                                    img={`${IMG_URL}/${item.thumbnail}`}
                                />

                                <PrevnextSummary>
                                    <PrevnextTitle>{item.title}</PrevnextTitle>
                                    <PrevnextDescription>
                                        {item.description}
                                    </PrevnextDescription>
                                </PrevnextSummary>
                            </PrevnextSummaryWrapper>
                        </Wrap>
                    );
                })}
            {/* <pre>{JSON.stringify(list, null, 4)}</pre>; */}
        </>
    );
};

export default ProjectNextPrevNav;
