import styled, { css } from 'styled-components';
import Thumbnail from 'component/ui/Thumbnail';

import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPostRelated } from '@type/BlogTypes';
import { IMG_URL } from 'constants/apiUrl';
import { device } from 'config/DeviceConfig';

const Container = styled.div<{ $even: boolean }>`
    display: flex;
    flex-direction: column;

    margin-right: 2rem;
    cursor: pointer;
    width: calc(25% - 2rem);
    @media ${device.tablet} {
        width: 47%;
        margin-bottom: 1.2rem;
        margin-right: 6%;
        ${({ $even }) => {
            return (
                $even &&
                css`
                    margin-right: 0 !important;
                `
            );
        }}
    }
`;

const Summary = styled.div`
    margin-top: 0.7rem;
    .title {
        font-size: 0.8rem;
    }
    .date {
        font-size: 0.8rem;
        opacity: 0.4;
    }
`;

const ThumbnailCustom = styled(Thumbnail)`
    border-radius: 0.5rem;
    padding-bottom: 60%;
`;

const BlogPostRelatedItem: React.FC<BlogPostRelated> = ({
    idx,
    post_id,
    post_title,
    create_at,
    thumnail_url,
}) => {
    const navigate = useNavigate();
    return (
        <Container
            $even={(idx! + 1) % 2 === 0}
            onClick={() => navigate(`/blog/${post_id}`)}
        >
            <ThumbnailCustom img={`${IMG_URL}/${thumnail_url}`} />
            <Summary>
                <div className="title">{post_title}</div>

                <div className="date">{format(create_at, 'yyyy-MM-dd')}</div>
            </Summary>
        </Container>
    );
};

export default BlogPostRelatedItem;
