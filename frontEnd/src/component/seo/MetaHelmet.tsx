import { Helmet } from 'react-helmet-async';

interface MetaProps {
    title: string;
}

const MetaHelmet: React.FC<MetaProps> = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:description" content="저를 기록합니다." />
            <meta
                property="og:image"
                content="https://d33h8icwcso2tj.cloudfront.net/metaImg.jpg"
            />
            <meta property="og:url" content="https://www.h-creations.com/" />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};
export default MetaHelmet;
