import styled from 'styled-components';

const Tab = styled.div`
    margin-right: 3rem;
    padding-right: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-grow: 1;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--borer-line-color);
`;

const Contents = styled.div`
    width: 100%;
`;

const BoardWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.5s ease;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 2rem;
    min-height: 300px;
    align-items: flex-start;
`;

export { Tab, Contents, BoardWrapper };
