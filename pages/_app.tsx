import React, { useState } from 'react';
import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from 'next/head';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';
import NavBar from "../components/NavBar";
import ContentContainer from "../components/ContentContainer";
import styled from "styled-components";

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
                        <NavBar />
                        <ContentContainer>
                            <Component {...pageProps} />
                        </ContentContainer>
                </main>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;