import styled from 'styled-components';

const NewIcon = styled.span`
    width: 12px;
    height: 12px;
    font-size: 0.5rem;
    color: #fff;
    display: inline-flex;
    background: rgb(255 99 99);
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-left: 5px;
`;

const PostNewIcon = (): JSX.Element => {
    return <NewIcon>N</NewIcon>;
};

export default PostNewIcon;
