import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import styled from 'styled-components';

const Search = styled.div`
    display: inline-flex;
    position: relative;
    font-size: 13px;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    /* border: var(--search-border-color); */
    background: var(--search-Background-color);
    border-radius: 4rem;
    padding-left: 1rem;
    /* border: 1px solid var(--color-lightBlue); */
    /* background: ${({ theme }) => theme.inputBackground}; */

    form {
        display: flex;
        flex-grow: 1;
    }
    input {
        /* border: 1px solid rgba(255, 255, 255, 0.1); */
        box-sizing: border-box;
        background: transparent;
        flex-grow: 1;
    }
    button {
        border-radius: 5rem;
        background: transparent;
        padding: 0.5rem;
        margin: 0.2rem;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.04);
    }
`;

const Select = styled.select`
    background: transparent;
    font-size: 12px;
    margin-right: 1rem;
    option {
        background: ${({ theme }) => theme.SearchBackground};
    }
`;

export default function SearchForm(): JSX.Element {
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef<HTMLInputElement>(null);

    const searchProject = (e: React.FormEvent) => {
        e.preventDefault();
        const newSearchParams = new URLSearchParams(searchParams);

        if (ref.current && ref.current.value.trim() !== '') {
            newSearchParams.set('search', ref.current.value.trim());
            newSearchParams.delete('page');
        } else {
            newSearchParams.delete('search');
            newSearchParams.delete('page');
        }
        setSearchParams(newSearchParams.toString());
    };

    return (
        <Search>
            <Select>
                <option value="제목">제목</option>
                <option value="내용">내용</option>
            </Select>

            <form onSubmit={e => searchProject(e)}>
                <input
                    type="text"
                    placeholder="검색어를 적어주세요..."
                    ref={ref}
                />

                <button>
                    <FaMagnifyingGlass />
                </button>
            </form>
        </Search>
    );
}
