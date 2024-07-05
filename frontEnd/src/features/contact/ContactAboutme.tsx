import styled from 'styled-components';
import ContactButtons from './ContactButtons';
import { device } from 'config/DeviceConfig';

const LeftComponent = styled.div`
    position: sticky;
    height: 100%;
    top: 100px;
    width: 20rem;
    /* background: ${({ theme }) => theme.backgroundColor}; */
    padding: 2rem;
    border-radius: 1rem;
    margin-right: 2rem;
    @media ${device.laptop} {
        display: none;
    }
`;
const PageSubText = styled.div`
    font-size: 16px;
    margin-bottom: 70px;
    p {
        font-size: 14px;
        opacity: 0.7;
        padding-top: 20px;
    }
`;

export default function ContactAboutme(): JSX.Element {
    return (
        <LeftComponent>
            <PageSubText>
                맡은 일에 대해 끝까지 노력합니다.<br></br>
                함께 일하고 싶은 동료가 되겠습니다.
                <p>@Web publisher / @Front Developer</p>
            </PageSubText>

            {/* 버튼 컴포넌트 */}
            <ContactButtons />
        </LeftComponent>
    );
}
