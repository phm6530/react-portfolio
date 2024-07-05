import DashBoard from 'component/ui/DashBoard/DashBoard';
import { Grid, PageWrapper } from '@layout/Grid';
import styled from 'styled-components';
import MailComponent from '@features/contact/MailComponent';
import ContactAboutme from '@features/contact/ContactAboutme';
import { device } from 'config/DeviceConfig';

const CustomGrid = styled(Grid)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media ${device.laptopL} {
        width: auto;
    }
`;

export default function Contact(): JSX.Element {
    return (
        <PageWrapper>
            <DashBoard
                pageTitle={'CONTACT'}
                subComment={'"퍼블리셔와 개발자 사이 그어딘가"'}
            />
            <CustomGrid>
                <ContactAboutme />
                <MailComponent />
            </CustomGrid>
        </PageWrapper>
    );
}
