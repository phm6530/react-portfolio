import styled from 'styled-components';
import { Grid } from 'layout/Grid';
import { FaGit } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { TbPhoneCall } from 'react-icons/tb';
import { device } from 'config/DeviceConfig';
import { SiTistory } from 'react-icons/si';
const FooterStyle = styled.div`
    /* background: rgb(0 0 0 / 4%); */
    padding: 50px 0px;
    display: flex;

    span {
        font-size: 12px;
        opacity: 0.9;
    }

    @media ${device.laptopL} {
        position: absolute;
        background: var(--color-background);
    }
`;
const FooterIconAlign = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const FooterIcon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    /* background: #fff; */
    margin-right: 10px;
    border: 1px solid var(--borer-line-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    img {
        width: 15px;
        filter: invert(1);
    }
`;

const FooterList = styled.div`
    display: flex;
    align-items: center;
    svg {
        margin-right: 5px;
        opacity: 0.5;
    }
    span {
        margin-left: 10px;
        padding-left: 10px;
        position: relative;

        &::after {
            content: '';
            border-left: 1px solid var(--borer-line-color);
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            height: 10px;
            transform: translate(-50%, -50%);
        }
    }
`;

const FooterGrid = styled(Grid)`
    width: 100%;
`;

const Link = (url: string) => {
    window.open(url, '_blank');
};

export default function Footer() {
    return (
        <FooterStyle>
            <FooterGrid>
                <FooterIconAlign>
                    <FooterIcon
                        onClick={() =>
                            Link('https://github.com/phm6530/MYportfolio')
                        }
                    >
                        <FaGit size={15} />
                    </FooterIcon>

                    <FooterIcon
                        onClick={() =>
                            Link('https://squirrel-story.tistory.com/')
                        }
                    >
                        <SiTistory size={15} />
                    </FooterIcon>
                </FooterIconAlign>
                <FooterList>
                    <TfiEmail size={'14'} /> <span> squirrel309@naver.com</span>
                </FooterList>
                <FooterList>
                    <TbPhoneCall size={'14'} /> <span> 010-0000-0000</span>
                </FooterList>
                <span style={{ marginTop: '20px', opacity: '.5' }}>
                    이미지 저작권은 유료 프리픽을 라이센스를 사용중이며,
                    게시물은 상업적 목적이 아닌 포트폴리오 목적으로만
                    사용됩니다. 아직 공개되지 않은 작업물은 포함하지 않으며,
                    오직 공개된 작업물만을 게시합니다.
                </span>
                <br></br>
                <span style={{ marginTop: '20px', opacity: '.5' }}>
                    Copyright ⓒ p. Hyun
                </span>
            </FooterGrid>
        </FooterStyle>
    );
}
