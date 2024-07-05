import axios from 'axios';
import { ENDPOINT_URL } from 'constants/apiUrl';
import {
    BlogMainContentsProps,
    BlogPostRelated,
    BlogCategorylist,
    ApiResData,
    BlogPostDetailProps,
    BlogNewPostListProps,
    BlogPostRequestProps,
} from '@type/BlogTypes';
import { requestHandler } from 'utils/apiUtils';

//카테고리
const fetchBlogCategory = async (): Promise<BlogCategorylist> => {
    const { resData } = await requestHandler<ApiResData<BlogCategorylist>>(
        () => {
            return axios.get(`${ENDPOINT_URL}/blog/tab`);
        },
    );
    return resData;
};

//포스팅 내용
const blogPostDetail = async (key: string): Promise<BlogPostDetailProps> => {
    const { resData } = await requestHandler<ApiResData<BlogPostDetailProps>>(
        () => {
            return axios.get(`${ENDPOINT_URL}/blog/postdetail/${key}`);
        },
    );
    return resData;
};

//관련 포스팅
const fetchPostRelated = async (
    postId?: string,
): Promise<BlogPostRelated[]> => {
    const { resData } = await requestHandler<ApiResData<BlogPostRelated[]>>(
        () => axios.get(`${ENDPOINT_URL}/blog/posts/${postId}/related`),
    );
    return resData;
};

// 전체 리스트
const fetchBlogPageData = async (
    item: string,
    category: string,
    page: number = 1,
    search: string = '',
): Promise<BlogMainContentsProps> => {
    const queryParams = new URLSearchParams({
        category,
        item,
        search,
    }).toString();

    const url = `${ENDPOINT_URL}/blog/posts/${page}?${queryParams}`;
    const result = await requestHandler<BlogMainContentsProps>(async () =>
        axios.get(url),
    );
    await new Promise(resolve => setTimeout(resolve, 500));
    return result;
};

//포스팅 삭제
const deleteBlogPost = async (key: string) => {
    return requestHandler(() =>
        axios.delete(`${ENDPOINT_URL}/blog/deletepost/${key}`),
    );
};

const blogPostAction = async (
    data: BlogPostRequestProps,
    pageType: string,
    postId: string,
): Promise<void> => {
    //페이지 타입
    const isModify = pageType === 'modify';
    const url = `${ENDPOINT_URL}/blog/${isModify ? `modify/${postId}` : 'post'}`;
    const method = isModify ? 'PATCH' : 'POST';

    await requestHandler(async () =>
        axios({
            url: url,
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }),
    );
};

const fetchNewPostlist = async (): Promise<BlogNewPostListProps[]> => {
    const { resData } = await requestHandler<
        ApiResData<BlogNewPostListProps[]>
    >(() => {
        return axios.get(`${ENDPOINT_URL}/blog/posts/newlist`);
    });

    return resData;
};

export {
    blogPostAction,
    fetchBlogCategory,
    blogPostDetail,
    deleteBlogPost,
    fetchNewPostlist,
    fetchBlogPageData,
    fetchPostRelated,
};
