import useBlogNewPostList from '@features/Blog/hooks/useBlogNewPostLIst';
import styled, { css } from 'styled-components';
import PostItem from './BlogPostItem';
import { useLocation } from 'react-router-dom';
import { device } from 'config/DeviceConfig';
const Container = styled.div<{ $isMain?: boolean }>`
    ${({ $isMain }) => ($isMain ? 'color: #fff' : 'width: 25%')};

    @media ${device.tablet} {
        ${({ $isMain }) => !$isMain && 'display: none;'}
    }
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding: 1rem 0;
    display: flex;
    align-items: center;
`;

const PostItemWrap = styled.div<{ $mainStyle?: boolean }>`
    ${({ $mainStyle }) => {
        if ($mainStyle) {
            return css`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            `;
        }
    }}
`;

const BlogNewPostList: React.FC<{ className?: string; page?: string }> = ({
    className,
    page,
}) => {
    // 최신글 리스트
    const { data } = useBlogNewPostList();
    const location = useLocation();
    const isMainPage: boolean = page === 'main';

    return (
        <Container $isMain={location.pathname === '/'} className={className}>
            <Title>
                {/* {isMainPage && (
                    <PiSignpostFill size={20} style={{ marginRight: '10px' }} />
                )} */}
                New Post
            </Title>
            <PostItemWrap $mainStyle={page === 'main'}>
                {data?.map((item, idx) => (
                    <PostItem
                        idx={idx}
                        page={isMainPage}
                        key={item.post_id}
                        post_description={item.post_description}
                        post_new={!!item.post_new}
                        post_id={item.post_id}
                        post_title={item.post_title}
                        create_at={item.create_at}
                    />
                ))}
            </PostItemWrap>
        </Container>
    );
};

export default BlogNewPostList;
