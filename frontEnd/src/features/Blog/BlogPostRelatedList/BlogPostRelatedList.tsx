import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BlogPostRelatedItem from '@features/Blog/BlogPostRelatedList/BlogPostRelatedItem';
import { device } from 'config/DeviceConfig';
import { useQuery } from '@tanstack/react-query';
import { queryKey } from 'services/queryKey';
import { fetchPostRelated } from 'services/blogService';
import { BlogPostRelated } from '@type/BlogTypes';

const RelatedPostsContainer = styled.div``;

const ListWrapper = styled.div`
    display: flex;
    width: 100%;
    & div:last-child {
        margin-right: 0;
    }
    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const SubCategory = styled.div`
    margin-bottom: 1rem;
`;

const BlogPostRelatedList = (): JSX.Element => {
    const { key: postId } = useParams();

    const { data } = useQuery<BlogPostRelated[]>({
        queryKey: [queryKey.blogRelated],
        queryFn: () => fetchPostRelated(postId),
        enabled: !!postId,
        staleTime: 5 * 60 * 1000,
    });

    const relatedList = data || [];

    return (
        <>
            {data && relatedList.length !== 0 && (
                <RelatedPostsContainer>
                    <SubCategory>관련 포스트</SubCategory>
                    <ListWrapper>
                        {relatedList.map((item, idx) => {
                            const {
                                post_id,
                                post_title,
                                create_at,
                                thumnail_url,
                            } = item;
                            return (
                                <BlogPostRelatedItem
                                    idx={idx}
                                    key={item.post_id}
                                    post_id={post_id}
                                    post_title={post_title}
                                    create_at={create_at}
                                    thumnail_url={thumnail_url}
                                />
                            );
                        })}
                    </ListWrapper>
                </RelatedPostsContainer>
            )}
        </>
    );
};

export default BlogPostRelatedList;
