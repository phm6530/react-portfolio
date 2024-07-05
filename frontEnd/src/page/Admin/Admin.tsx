import { Grid, PageWrapper } from '@layout/Grid';
import DashBoard from 'component/ui/DashBoard/DashBoard';

const AdminPage = () => {
    return (
        <>
            <PageWrapper>
                <DashBoard
                    pageTitle={'Admin'}
                    subComment={'"Guest Board"  한마디 부탁드려요"'}
                />
                <Grid>aa</Grid>
            </PageWrapper>
        </>
    );
};

export default AdminPage;
