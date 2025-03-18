import styled from 'styled-components';
import { DateUtils } from 'utils/dateUtil';

const PostLastUpdate = styled.span`
    font-size: 13px;
    opacity: 0.6;
    span {
        display: inline-block;
        margin-right: 10px;
    }
`;
interface SummaryDataProps {
    style?: React.CSSProperties;
    className?: string;
    message?: string;
    date: Date;
}

const PostTimestamp: React.FC<SummaryDataProps> = ({
    className,
    message,
    date,
    ...rest
}) => {
    return (
        <PostLastUpdate className={className} {...rest}>
            {message && <span>{message}</span>}
            {DateUtils.dateFormatKR(date, 'YYYY. MM. DD HH:mm:ss')}
        </PostLastUpdate>
    );
};

export default PostTimestamp;
