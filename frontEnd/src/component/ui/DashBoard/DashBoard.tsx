import styled, { keyframes } from 'styled-components';

import { Grid } from '@layout/Grid';

import DashBoardTitle from './DashBoardTitle';
import BackgroundImgCover from 'component/ui/BackgroundImgCover';
import StarAnimation from 'component/animations/StarAnimation';

const PageBanner = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const animation = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const PageInfoText = styled.div`
    margin-bottom: 1rem;
    img {
        margin-right: 10px;
    }
    opacity: 0;
    background: linear-gradient(to left, #f0f0f0, #a9a5cc, #8e9bfc);
    color: transparent;
    font-weight: bold;
    background-clip: text;
    -webkit-background-clip: text;
    display: inline-flex;
    animation: ${animation} 1s 0.6s cubic-bezier(0.1, 0.45, 0, 1.09) forwards;
`;

interface DashBoardProps {
    className?: string;
    pageTitle?: string;
    subComment?: string;
    page?: string;
    children?: React.ReactNode;
}

const BannerGrid = styled(Grid)`
    padding-top: 12.5rem;
    padding-bottom: 8rem;
    width: 100%;

    position: relative;
    max-width: 1080px;
    flex-grow: 1;
    width: 100%;
`;

const DashBoard: React.FC<DashBoardProps> = ({
    className,
    pageTitle,
    subComment,
    // children,
}) => {
    // const { pathname } = useLocation();

    // class star {
    //     x: number;
    //     y: number;
    //     size: number;
    //     time: number;

    //     constructor(x = 0, y = 0, size = 0, time = 1) {
    //         this.x = x;
    //         this.y = y;
    //         this.size = size;
    //         this.time = time;
    //     }

    //     set() {
    //         this.x = Math.random() * window.innerWidth;
    //         this.y = Math.random() * window.innerHeight;
    //         this.size = Math.random() * 12;
    //         this.time = (Math.random() + 0.2) * 8;

    //         const background = document.getElementById('main')!;
    //         const starDiv = document.createElement('div');
    //         starDiv.className = 'star';

    //         starDiv.style.position = 'absolute';
    //         starDiv.style.left = this.x + 'px';
    //         starDiv.style.top = this.y + 'px';
    //         starDiv.style.width = this.size + 'px';
    //         starDiv.style.height = this.size + 'px';
    //         starDiv.style.backgroundColor = 'white';
    //         starDiv.style.filter = 'blur(5px)';
    //         starDiv.style.animation = `ani ${this.time}s  infinite`;
    //         background.appendChild(starDiv);
    //     }
    // }

    // useEffect(() => {
    //     for (let i = 0; i < 15; i++) {
    //         const newStar = new star();
    //         newStar.set();
    //     }
    // }, []);

    return (
        <PageBanner className={className}>
            {/* 백그라운드 */}
            <BackgroundImgCover imgSrc="/img/4.jpg">
                <StarAnimation />
                {/* <ShootingStar /> <Star id="main"></Star> */}
            </BackgroundImgCover>

            <BannerGrid>
                <DashBoardTitle>
                    {pageTitle}
                    {/* <Division>.me()</Division> */}
                </DashBoardTitle>

                {subComment && (
                    <PageInfoText>
                        <img
                            src="/img/contact/talk2.png"
                            style={{ width: '20px' }}
                        />
                        {subComment}
                    </PageInfoText>
                )}

                {/* <PathStyle>
                    <IoMdHome /> HOME {pathname.replace('/', ' / ')}
                </PathStyle> */}
            </BannerGrid>
        </PageBanner>
    );
};

export default DashBoard;
