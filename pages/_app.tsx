import React, { useState } from 'react';
import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from 'next/head';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';
import TopNavbar from "../components/TopNavbar";
import SideNavBar from "../components/SideNavBar";
import NavBar from "../components/NavBar";
import styled from "styled-components";

type ContentProps = {
    isAuthenticated: boolean;
}

const Content = styled.div<ContentProps>`
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    @media screen and (min-width: 1200px) {
        float: right;
        width: ${(props) => props.isAuthenticated ? "calc(100% - 350px)" : "100%"};
    }
`;

const MyApp = ({ Component, pageProps }) => {
    const [isAuthenticated, setAuthenticated] = useState(true);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle theme={theme} />
                <Head>
                    <title>EasyMealPlanner | Welcome</title>
                </Head>
                <main>
                        {/* <TopNavbar /> */}
                        {/* <SideNavBar /> */}
                        <NavBar />
                        <Content isAuthenticated={isAuthenticated}>
                            <Component {...pageProps} />
                        </Content>
                </main>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;