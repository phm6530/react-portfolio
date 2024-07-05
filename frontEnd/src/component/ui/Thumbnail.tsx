import styled from 'styled-components';

// icon
import { FaMagnifyingGlass } from 'react-icons/fa6';
// import { HashTag } from 'component/CommonStyle';
import { thumnail_url } from '@type/BlogTypes';
import { device } from 'config/DeviceConfig';

const ThumbNailContainer = styled.div<{
    $backImg: string | null;
    $badge?: string;
}>`
    width: 100%;

    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    margin-right: 3rem;
    transition: all 0.5s ease;
    background: #6f6f6f42;
    background-size: cover;
    background-position: center;
    /* border: 1px solid var(--borer-line-color); */

    background-image: ${({ $backImg }) =>
        `url(${$backImg || '/img/blog/noimg.png'})`};

    &:hover {
        transform: scale(1.02);
        .aniTarget {
            background: rgba(0, 0, 0, 0.3);
            svg {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }

    @media ${device.tablet} {
        width: 100%;
        margin-right: 0rem;
    }
`;

const ViewIconAnimation = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    transition: all 0.5s ease;

    svg {
        opacity: 0;
        transform: translateY(40px);
        font-size: 2rem;
        color: #fff;
        filter: drop-shadow(0px 0px 10px);
        transition: all 0.3s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`;

interface thumbNailProps {
    className?: string;
    img: thumnail_url | null;
    badge?: string;
}

const Thumbnail: React.FC<thumbNailProps> = ({ className, img, badge }) => {
    const isNullImage = img && img.includes('/null') ? null : img;

    return (
        <>
            <ThumbNailContainer
                className={className}
                $backImg={isNullImage}
                $badge={badge}
            >
                {/* <HasTagCustom>{badge}</HasTagCustom> */}
                <ViewIconAnimation className="aniTarget">
                    <FaMagnifyingGlass />
                </ViewIconAnimation>
            </ThumbNailContainer>
        </>
    );
};

export default Thumbnail;
