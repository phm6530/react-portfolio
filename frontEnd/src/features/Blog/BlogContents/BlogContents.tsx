import styled from 'styled-components';
import BlogContentsItem from '@features/Blog/BlogContents/BlogContentsItem';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { BlogMainContentsItemProps } from '@type/BlogTypes';

import Motion from 'component/animations/Motion';

const Contents = styled.div`
    flex-direction: column;
    border-radius: 1em;
    flex-grow: 1;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const BlogContents: React.FC<{ data: BlogMainContentsItemProps[] }> = ({
    data,
}) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Motion.FadeInOut key={location.search}>
                <Contents>
                    {data.map((item, idx) => {
                        return (
                            <BlogContentsItem item={item} key={'test' + idx} />
                        );
                    })}
                </Contents>
            </Motion.FadeInOut>
        </AnimatePresence>
    );
};

export default BlogContents;
