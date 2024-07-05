export interface ApiResData<T> {
    resData: T;
}

//blog Summary
type post_date = Date;
type post_category = string;
type post_subcategory = string;
type post_id = number;
type post_title = string;
type imgUrl = string;
type post_imgKey = string;
type post_username = string;
type post_contents = string;
type post_description = string;

export type thumnail_url = string | null;

//블로그 관련카테고리 리스트
export interface BlogPostRelated {
    idx?: number;
    create_at: post_date;
    post_id: post_id;
    post_title: post_title;
    thumnail_url: thumnail_url;
}

//메인 콘텐츠 리스트
export interface BlogMainContentsItemProps {
    post_id: post_id;
    date: Date;
    description: string;
    category: string;
    post_title: string;
    subcategory: string;
    thumnail: thumnail_url;
}

//메인 콘텐츠 리스트
export interface BlogMainContentsProps {
    message: string;
    resData: BlogMainContentsItemProps[];
    paging: number;
}

//이미지 업로드 타입
export interface BlogImgUploaderProps {
    message: string;
    imgUrl: imgUrl;
}

//Detail Type
export interface BlogPostDetailProps {
    category: post_category;
    contents: post_contents;
    create_date: post_date;
    imgkey: post_imgKey;
    post_id: post_id;
    post_title: post_title;
    subcategory: post_subcategory;
    update_date: post_date;
    user: post_username;
    description: string;
    thumbNail: string;
}

// 카테고리 List
export interface BlogCategoryDetail {
    post_count: number;
    post_new: boolean;
}

export interface BlogCategory {
    [subcategory: string]: BlogCategoryDetail;
}

export interface BlogCategorylist {
    All: number;
    [category: string]: BlogCategory | number;
}

export interface BlogCategoryResponse {
    message: string;
    resData: BlogCategorylist;
}

// 블로그 새글 리스트
export interface BlogNewPostListProps {
    post_id: post_id;
    post_title: post_title;
    post_description: post_description;
    create_at: post_date;
    post_new: number;
}

export interface BlogAddorEditProps {
    title: post_title;
    category: post_category;
    post: post_contents;
}

// Add or Edit 요청
export interface BlogPostRequestProps {
    category: post_category;
    description: post_description | undefined;
    post: post_contents;
    key: post_imgKey;
    thumNail: thumnail_url;
    user: object;
}
