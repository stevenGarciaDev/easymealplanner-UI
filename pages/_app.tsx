import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';

import NavBar from "../components/NavBar";
import styled from "styled-components";

const Content = styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    @media screen and (min-width: 1200px) {
        float: right;
        width: calc(100% - 350px);
    }
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