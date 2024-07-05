import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'style/CssinJsTheme';
import { ReactNode } from 'react';
import useStore from 'store/zustandStore';

interface ThemeWrapperProps {
    children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    const darkMode = useStore(state => state.darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
