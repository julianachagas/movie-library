import { ThemeProvider } from 'styled-components';
import { GlobalStyles, MainContainer } from './styles/global';
import { defaultTheme } from './styles/theme';
import { Sidebar } from './components/Sidebar';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Header } from './components/Header';
import { GlobalContext } from './contexts/GlobalContext';
import React from 'react';
import { BackToTopButton } from './components/BackToTopButton';

function App() {
  const { pathname } = useLocation();
  const { mobileMenu } = React.useContext(GlobalContext);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, mobileMenu, searchParams]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <MainContainer>
        <Outlet />
        <BackToTopButton />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
