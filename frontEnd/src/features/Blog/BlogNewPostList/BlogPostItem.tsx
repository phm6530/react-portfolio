import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import styled, { css } from 'styled-components';
import PostNewIcon from 'component/ui/PostNewIcon';

const ItemWrap = styled.div<{ $mainPage?: boolean; $firstIdx: boolean }>`
    cursor: pointer;
    font-size: 13px;
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: column;

    &:hover {
        color: var(--hover-color);
    }

    ${({ $mainPage, $firstIdx }) =>
        $mainPage &&
        css`
            margin-bottom: 0.7rem;
            padding-bottom: 0.2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 0.5rem;
            background: #ffffff05;
            width: ${$firstIdx ? '100%' : '48%'};
        `}
`;

const ItemPostTitle = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: inline-block;
    max-width: calc(100% - 17px);
`;

const ItemPostDate = styled.div`
    opacity: 0.5;
    font-size: 11px;
`;

const ItemDescription = styled.div`
    margin-top: 5px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
`;

const ItemTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

type PostItemProps = {
    idx?: number;
    page?: boolean;
    post_description?: string;
    post_new?: boolean;
    post_id: number;
    post_title: string;
    create_at: Date;
};

const PostItem: React.FC<PostItemProps> = ({
    idx,
    page: mainPage,
    post_id,
    post_title,
    post_description,
    create_at,
    post_new,
}) => {
    const navigate = useNavigate();
    const firstIdx = idx === 0;

    return (
        <ItemWrap
            $firstIdx={firstIdx}
            $mainPage={mainPage}
            onClick={() => navigate(`/blog/${post_id}`)}
        >
            <ItemTitleWrapper style={{ display: 'flex' }}>
                <ItemPostTitle>{post_title}</ItemPostTitle>
                {post_new && <PostNewIcon />}
            </ItemTitleWrapper>
            {mainPage && firstIdx && (
                <ItemDescription>{post_description}</ItemDescription>
            )}

            <ItemPostDate>{format(create_at, 'yyyy-MM-dd')}</ItemPostDate>
        </ItemWrap>
    );
};
export default PostItem;
