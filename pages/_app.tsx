import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';

import NavBar from "../components/NavBar";
import styled from "styled-components";

const Content = styled.div`
    height: 100vh;
    width: calc(100% - 300px);
    float: right;
`;

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <Head>
                <title>EasyMealPlanner | Welcome</title>
            </Head>
            <main>
                <NavBar />
                <Content>
                    <Component {...pageProps} />
                </Content>
            </main>
        </ThemeProvider>
    );
}