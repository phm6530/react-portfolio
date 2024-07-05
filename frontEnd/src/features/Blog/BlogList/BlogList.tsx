import BlogContents from '@features/Blog/BlogContents/BlogContents';
import useBlog from '@features/Blog/hooks/useBlog';
import NonData from 'component/NonData';
import Paging from 'component/Paging';
import { SpinnerLoading } from 'component/loading/SpinnerLoading';
import { useSearchParams } from 'react-router-dom';

const BlogList = (): JSX.Element => {
    const { data, isLoading } = useBlog();
    const [searchParams] = useSearchParams();
    const search: string = searchParams.get('search') || 'all';

    return (
        <>
            {isLoading ? (
                <SpinnerLoading />
            ) : data && data?.resData.length > 0 ? (
                <>
                    <BlogContents data={data.resData} />
                    <Paging paging={data.paging} />
                </>
            ) : (
                <div>
                    {search === 'all' || search.trim() === '' ? (
                        <NonData message={'등록된 데이터가 없습니다.'} />
                    ) : (
                        <NonData
                            message={`"${search}" 검색 데이터가 없습니다.`}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default BlogList;
