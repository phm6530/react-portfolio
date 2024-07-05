import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { queryKey } from 'services/queryKey';
import { fetchBlogPageData } from 'services/blogService';
import { BlogMainContentsProps } from '@type/BlogTypes';

const useBlog = () => {
    const [params] = useSearchParams();

    // 쿼리스트링
    const category: string = params.get('category') || 'All';
    const item: string = params.get('item') || '';
    const page: number = parseInt(params.get('page') || '1');
    const search: string | null = params.get('search') || '';

    // 파라미터 변경시 쿼리 실행하도록
    const isEnabled = Boolean(item || search || category);

    return useQuery<BlogMainContentsProps, Error>({
        queryKey: [queryKey.blog, item, category, page, search],
        queryFn: () => fetchBlogPageData(item, category, page, search),
        staleTime: 5000,
        enabled: isEnabled,
    });
};

export default useBlog;
