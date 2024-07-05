import { useNavigate, useParams } from 'react-router-dom';
import { SpinnerLoading } from 'component/loading/SpinnerLoading';
import QuillView from 'component/editor/QuillView';
import useBlogPostDetail from '@features/Blog/hooks/useBlogPostDetail';
import NotfoundPage from 'component/error/NotfoundPage';

import BlogDetailDeleteBtn from 'features/Blog/BlogDetailControls/BlogDetailDeleteBtn';
import BlogDetailEditBtn from 'features/Blog/BlogDetailControls/BlogDetailEditBtn';
import BlogPostRelatedList from '@features/Blog/BlogPostRelatedList/BlogPostRelatedList';

import useStore from 'store/zustandStore';

import * as S from './BlogDetailStyle';

import { Button } from 'component/ui/Button';
import PostTimestamp from 'component/ui/PostTimestamp';

const BlogDetail = (): JSX.Element => {
    const { key } = useParams();
    const navigate = useNavigate();
    const login = useStore(state => state.userAuth.login);
    const { data, isLoading, isError } = useBlogPostDetail(key ? key : '');

    if (isLoading) {
        return (
            <>
                <SpinnerLoading />
            </>
        );
    }

    if (isError) {
        return (
            <>
                <NotfoundPage redirectPath={'/blog'} />
            </>
        );
    }

    return (
        <>
            {data && key && (
                <>
                    <div style={{ width: '100%' }}>
                        {/* Editor View header */}
                        <S.PostDetailHeader>
                            <S.CateGroy>
                                {data.category} / {data.subcategory}
                            </S.CateGroy>

                            <S.PostTitle>{data.post_title}</S.PostTitle>

                            <S.PostInfo>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <S.UserPictrue>
                                        <img src="/img/me.jpg" alt="me" />
                                    </S.UserPictrue>
                                    {data.user}

                                    <S.SummaryDataAlign
                                        date={data.create_date}
                                    />
                                </div>
                                <S.ControlBtnWrap>
                                    <Button.Action
                                        onClick={() => navigate('/blog')}
                                    >
                                        목록
                                    </Button.Action>
                                    {login && (
                                        <>
                                            {/* 수정 */}
                                            <BlogDetailEditBtn postId={key} />
                                            {/* 삭제 */}
                                            <BlogDetailDeleteBtn
                                                postKey={key}
                                            />
                                        </>
                                    )}
                                </S.ControlBtnWrap>
                            </S.PostInfo>
                        </S.PostDetailHeader>

                        {/* Quill View */}
                        <S.QuillViewWrapper>
                            <QuillView contents={data.contents} />
                            {data?.update_date && (
                                <PostTimestamp
                                    style={{
                                        marginTop: '5rem',
                                        display: 'block',
                                    }}
                                    message={'게시물 최근 수정 일'}
                                    date={data.update_date}
                                />
                            )}
                        </S.QuillViewWrapper>

                        <BlogPostRelatedList />
                    </div>
                </>
            )}
        </>
    );
};

export default BlogDetail;
