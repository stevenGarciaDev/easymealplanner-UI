import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';

import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <Head>
                <title>EasyMealPlanner | Welcome</title>
            </Head>
            <main>
                <NavBar />
                <h1>EasyMealPlanner</h1>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}