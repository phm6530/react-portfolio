import styled, { css } from 'styled-components';
import useQueryString from '../../../hooks/useSearchQueryString';
import { useSearchParams } from 'react-router-dom';
import { BlogCategoryDetail } from '@type/BlogTypes';
import { device } from 'config/DeviceConfig';
import PostNewIcon from 'component/ui/PostNewIcon';

const CategoryList = styled.div<{ $select: boolean }>`
    height: 2.4rem;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* border: 1px solid #354363; */
    padding: 1rem;
    border-radius: 3rem;
    margin: 0.4rem;
    &:hover {
        color: var(--hover-color);
    }
    background: var(--background-category-color);
    ${props =>
        props.$select
            ? css`
                  background: var(--background-category-active);
                  color: #fff;
              `
            : css`
                  color: var(--color-hash-tag-text);
              `};
    @media ${device.tablet} {
        height: 2rem;
        padding: 0.9rem;
    }

    /* background: var(--color-hash-tag-background);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1); */
`;

const Cnt = styled.span`
    color: ${({ theme }) => theme.tabCnt};
    font-size: 12px;
    margin: 0 1px 0 2px;
`;

interface BlogTabDetailProps extends BlogCategoryDetail {
    category: string;
    item: string;
}

const BlogTabDetail: React.FC<BlogTabDetailProps> = ({
    category,
    item,
    post_count: cnt,
    post_new: newPost,
}) => {
    const { navigateHandler } = useQueryString('blog');
    const [params] = useSearchParams();

    const itemParams: string | null = params.get('item');
    const categoryParams: string | null = params.get('category');

    return (
        <>
            <CategoryList
                $select={categoryParams === category && itemParams === item}
                onClick={() =>
                    navigateHandler({
                        category,
                        item,
                    })
                }
            >
                {item} <Cnt>({cnt})</Cnt> {newPost && <PostNewIcon />}
            </CategoryList>
        </>
    );
};

export default BlogTabDetail;
