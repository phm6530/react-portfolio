import EditorTitle from 'component/editor/EditorTitle';
import BlogSelectCategory from '@features/Blog/BlogselectCategory/BlogSelectCategory';
import { SubTitle } from 'component/ui/Subtitle';
import TestQuillEditor from 'component/editor/TestQuillEditor';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'component/ui/Button';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { EditorGetPreview } from 'component/editor/EditorGetPreview';
import { useEffect, useState } from 'react';

import DotLoading from 'component/loading/DotLoading';
import useBlogPostDetail from '@features/Blog/hooks/useBlogPostDetail';
import useBlogPostAction from '@features/Blog/hooks/useBlogPostAction';

//타입 get
import { BlogAddorEditProps, BlogPostRequestProps } from '@type/BlogTypes';
import { IMG_URL } from 'constants/apiUrl';
import useStore from 'store/zustandStore';
import styled from 'styled-components';

const ChkArea = styled.div`
    margin-bottom: 1.5rem;
    display: grid;
    justify-content: start;
    label {
        cursor: pointer;
        &:hover {
            color: var(--color-hash-tag-text);
        }
    }
`;

interface FormValue extends BlogAddorEditProps {
    user: object;
    defaultThumNail: boolean;
}

const BlogAdd = (): JSX.Element => {
    const [params] = useSearchParams();
    const userData = useStore(state => state.userAuth.user);

    const postId = params.get('post') || '';
    const editorType = params.get('type') || '';

    const { data } = useBlogPostDetail(postId);
    const { mutate, isPending } = useBlogPostAction(editorType, postId);
    const [postKey, setPostKey] = useState<string>(uuidv4());

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValue>({
        defaultValues: {
            title: '',
            category: '',
            post: '',
            defaultThumNail: false,
            user: userData, //유저정보 담아 보내기
        },
    });

    useEffect(() => {
        // ?type=modify 시 formData에 value 삽입
        if (editorType === 'modify') {
            if (data) {
                const { post_title, category, subcategory, contents, imgkey } =
                    data;
                const originalDomain = 'uploads/';
                const updatedContents = contents.replaceAll(
                    originalDomain,
                    `${IMG_URL}/uploads/`,
                );

                reset({
                    title: post_title,
                    category: `${category}:${subcategory}`,
                    post: updatedContents,
                    user: userData,
                });

                setPostKey(imgkey); // 서버에서 받아온 imgKey 설정
            }
        } else {
            setPostKey(uuidv4()); // 새 UUID 생성
        }
    }, [data, reset, editorType, userData]);

    const defaultThumNail = (category: string) => {
        const [a, b] = category;
        console.log(a, b);
        return 'string';
    };

    // Submit
    const onSubmitHandler: SubmitHandler<FormValue> = data => {
        const content = EditorGetPreview(data.post);

        // 기본 썸네일로직 추가
        const thumNail = !data.defaultThumNail
            ? content.getImg()
            : defaultThumNail(data.category);

        const description = content.getText();
        const post = content.getPost();

        const requestData: BlogPostRequestProps = {
            ...data,
            post,
            key: postKey,
            thumNail,
            description,
        };

        mutate(requestData);
    };

    return (
        <>
            {isPending && <DotLoading />}
            <SubTitle>
                <div className="subText">
                    <span className="point">BLOG POST</span>
                </div>
            </SubTitle>

            {/* 선택 카테고리 */}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <BlogSelectCategory
                    error={errors.category}
                    register={register('category', {
                        required: '필수항목 입니다.',
                    })}
                />

                <ChkArea>
                    <label>
                        <input
                            type="checkbox"
                            {...register('defaultThumNail')}
                        />{' '}
                        기본 썸네일 사용
                    </label>
                </ChkArea>

                {/* quill 툴바 */}
                {/* <CustomToolbar /> */}

                {/* quill 에디터 */}
                <EditorTitle
                    placeholder="제목을 입력해주세요"
                    error={errors.title}
                    register={register('title', {
                        required: '필수항목 입니다.',
                    })}
                />
                {postKey && (
                    <Controller
                        name="post"
                        control={control}
                        render={({ field }) => {
                            const { ref, ...restField } = field;
                            void ref;
                            return (
                                <TestQuillEditor
                                    postKey={postKey}
                                    page={'blog'}
                                    {...restField} // `ref`를 제외한 나머지 프로퍼티 전달
                                    // PROJECT_KEY={projectKey}
                                />
                            );
                        }}
                    />
                )}
                <Button.Submit style={{ marginLeft: 'auto' }}>
                    블로그 포스팅하기
                </Button.Submit>
            </form>
        </>
    );
};

export default BlogAdd;
