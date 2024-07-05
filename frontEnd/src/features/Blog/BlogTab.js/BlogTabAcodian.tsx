import styled from 'styled-components';
import BlogTabDetail from './BlogTabDetail';
import useQueryString from '../../../hooks/useSearchQueryString';
import { useRef, useState } from 'react';
import { BlogCategory } from '@type/BlogTypes';
import { device } from 'config/DeviceConfig';

const ListWrapper = styled.div<ListWrapperProps>`
    overflow: hidden;
    padding-left: 1rem;
    transition: 0.3s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border-bottom: 1px solid var(--borer-line-color); */
    @media ${device.tablet} {
        padding-left: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const CateGory = styled.div`
    font-size: 16px;
    padding: 1rem 0;
    min-width: 50px;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
    @media ${device.tablet} {
        padding: 0.5rem 0 0.3rem;
    }
`;
const Cnt = styled.span`
    color: ${({ theme }) => theme.tabCnt};
    font-size: 12px;
    margin: 0 15px 0 5px;
`;

const LeftAlign = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
`;
const CategoryWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const CategoryType = styled.div`
    @media ${device.tablet} {
        font-size: 12px;
        font-weight: initial;
    }
`;

interface ListWrapperProps {
    $first: boolean;
    $view: boolean;
    // $height: number;
}

interface AccodianTabProps {
    list: BlogCategory | number;
    category: string;
    idx: number;
}

const AccodianTab: React.FC<AccodianTabProps> = ({ list, idx, category }) => {
    const [view, setView] = useState<boolean>(true);
    const ref = useRef<HTMLInputElement>(null);
    const { navigateHandler } = useQueryString('blog');

    const ToggleBtn = (category: string): void => {
        if (category === 'All') {
            navigateHandler({ category: 'All' });
        }
        setView(prev => !prev);
    };

    // 0번째 idx는 전체 갯수를 보여줘야한다
    const allCnt = idx === 0 && typeof list === 'number' && list;

    // 높이계산
    // useEffect(() => {
    //     if (ref.current) {
    //         setHeight(ref.current.scrollHeight);
    //     }
    // }, [view]);

    return (
        <CategoryWrapper>
            <CateGory onClick={() => ToggleBtn(category)}>
                {idx === 0 ? (
                    <LeftAlign>
                        {category} <Cnt>( {allCnt} )</Cnt>
                    </LeftAlign>
                ) : (
                    <CategoryType>{category}</CategoryType>
                )}
                {/* {idx !== 0 ? !view ? <GoPlus /> : <LuMinus /> : undefined} */}
            </CateGory>

            {/* 타입가드로 number가 아닐때만 확실하게  */}

            <ListWrapper
                $first={idx === 0}
                $view={view}
                ref={ref}
                // $height={height}
            >
                {typeof list !== 'number' && Object.keys(list).length > 0
                    ? Object.keys(list).map((item, idx) => (
                          <BlogTabDetail
                              category={category}
                              item={item}
                              post_count={list[item].post_count}
                              post_new={list[item].post_new}
                              key={`${item}-${idx}`}
                          />
                      ))
                    : null}
            </ListWrapper>
        </CategoryWrapper>
    );
};

export default AccodianTab;
