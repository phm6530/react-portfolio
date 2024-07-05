import useBlogNewPostList from '@features/Blog/hooks/useBlogNewPostLIst';
import styled from 'styled-components';
import PostItem from './BlogPostItem';
import { useLocation } from 'react-router-dom';

const Container = styled.div<{ $isMain?: boolean }>`
    margin-top: 2rem;

    ${({ $isMain }) => $isMain && 'color: #fff;'}
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding: 1rem 0;
`;

const BlogNewPostList = (): JSX.Element => {
    // 최신글 리스트
    const { data } = useBlogNewPostList();

    const location = useLocation();

    return (
        <Container $isMain={location.pathname === '/'}>
            <Title>최신글</Title>
            <div>
                {data?.map(item => (
                    <PostItem
                        key={item.post_id}
                        post_id={item.post_id}
                        post_title={item.post_title}
                        create_at={item.create_at}
                    />
                ))}
            </div>
        </Container>
    );
};

export default BlogNewPostList;
