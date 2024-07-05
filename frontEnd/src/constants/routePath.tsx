import Contact from 'page/contact/Contact';
import NotfoundPage from 'component/error/NotfoundPage';
import Blog from 'page/blog/Blog';
import Project from '@page/Project';
import About from '@page/about/About';
import Home from '@page/Home';
import Board from '@page/Board/Board';
import AdminPage from '@page/Admin/Admin';
import withAuth from 'hoc/WithAuth';

interface RoutePath {
    path: string;
    Component: React.ReactNode;
}

interface NavPage {
    path: string;
    pathName: string;
    AuthPage: boolean;
}

const AuthCheck = withAuth(AdminPage, '/');

export const ROUTE_PATH: RoutePath[] = [
    { path: '/', Component: <Home /> },
    { path: '/about', Component: <About /> },
    { path: '/project/*', Component: <Project /> },
    // { path: '/myschedule/*', Component: <MySchedule /> },
    { path: '/Board', Component: <Board /> },
    { path: '/contact', Component: <Contact /> },
    { path: '/blog/*', Component: <Blog /> },
    { path: '/Admin', Component: <AuthCheck /> },
    { path: '/*', Component: <NotfoundPage redirectPath={'/'} /> },
];

export const NAVPAGE_OBJECT: NavPage[] = [
    { path: '/', pathName: 'HOME', AuthPage: false },
    { path: '/about', pathName: 'About', AuthPage: false },
    { path: '/project', pathName: 'PROJECT', AuthPage: false },
    // { path: '/myschedule', pathName: 'MY Calendar', AuthPage: true },
    { path: '/blog', pathName: 'Blog', AuthPage: false },
    { path: '/Board', pathName: 'Board', AuthPage: false },
    { path: '/contact', pathName: 'Contact', AuthPage: false },
    { path: '/Admin', pathName: 'Admin', AuthPage: true },
];
