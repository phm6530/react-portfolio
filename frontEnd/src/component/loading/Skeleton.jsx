import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ProjectFadeinStyle = styled.div`
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33.333% - 1.34rem);
    width: 100%;
    align-items: start;
    cursor: pointer;
    margin-right: 2rem;
    &:nth-child(3n + 2) {
        margin-right: 0rem;
    }
`;

const SkeletonPost = ({ listCnt }) => {
    const arr = [...Array(listCnt)].map((_, idx) => idx + 1);

    return (
        <>
            {arr.map(e => {
                return (
                    <ProjectFadeinStyle key={`idx${e}`}>
                        <Skeleton
                            variant="rectangular"
                            sx={{
                                width: '100%',
                                height: '10.6rem',
                                bgcolor: 'grey.900',
                            }}
                        />
                        <Skeleton
                            width="70%"
                            sx={{
                                bgcolor: 'grey.900',
                            }}
                        />
                        <Skeleton
                            width="50%"
                            sx={{
                                bgcolor: 'grey.900',
                            }}
                        />
                    </ProjectFadeinStyle>
                );
            })}
        </>
    );
};

export default SkeletonPost;
