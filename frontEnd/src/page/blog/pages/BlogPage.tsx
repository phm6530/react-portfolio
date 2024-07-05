import SearchForm from 'component/ui/SearchForm';
import { Tab } from 'features/Blog/BlogStyle';
import BlogTab from '@features/Blog/BlogTab.js/BlogTab';
import BlogNewPostList from 'features/Blog/BlogNewPostList/BlogNewPostList';
import BlogList from '@features/Blog/BlogList/BlogList';
import BlogSUbCategoryTitle from '@features/Blog/BlogSubCategoryTitle';
const BlogPage = (): JSX.Element => {
    return (
        <>
            <Tab>
                {/* 최신글 */}
                <BlogNewPostList />
                <BlogTab />
            </Tab>
            <BlogSUbCategoryTitle />
            {/* Search */}
            <SearchForm />
            {/* Board List */}
            <BlogList />
        </>
    );
};

export default BlogPage;
