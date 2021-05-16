import React, { useState } from 'react';
import Head from 'next/head';

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';

import TopNavbar from "../components/TopNavbar";
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
        // width: calc(100% - 350px);
    }
`;

export default function MyApp({ Component, pageProps }) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <Head>
                <title>EasyMealPlanner | Welcome</title>
            </Head>
            <main>
                <TopNavbar />
                {/* <NavBar /> */}
                <Content isAuthenticated={isAuthenticated}>
                    <Component {...pageProps} />
                </Content>
            </main>
        </ThemeProvider>
    );
}