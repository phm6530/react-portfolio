import styled from 'styled-components';

const PagePoint = styled.div`
    background: rgba(0, 0, 0, 0.2);
    display: inline-flex;
    align-content: center;
    /* padding: 13px 15px; */
    align-items: center;
    /* width: 150px; */
    border-radius: 1em;
    color: #fff;

    img {
        width: 30px;
        margin-right: 10px;
    }
`;

const BannerPoint: React.FC<{
    className?: string;
    children: React.ReactNode;
}> = ({ className, children }) => {
    return <PagePoint className={className}>{children}</PagePoint>;
};

export default function BannerCommon({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

BannerCommon.BannerPoint = BannerPoint;
