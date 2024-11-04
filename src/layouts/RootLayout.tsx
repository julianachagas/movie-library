import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BackToTopButton } from "../components/BackToTopButton";
import { Header } from "../components/Header";
import { GlobalStyles, MainContainer } from "../styles/global";
import { defaultTheme } from "../styles/theme";
import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Sidebar } from "../components/Sidebar";


export const RootLayout = () => {
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
};