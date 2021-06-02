import React from 'react';
import { wrapper, persistor } from "../store/store";
import Head from 'next/head';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from '../shared/theme';
import NavBar from "../components/NavBar";
import ContentContainer from "../components/ContentContainer";
import AuthGuard from "../components/AuthGuard";
import NoDuplicateAuthGuard from "../components/NoDuplicateAuthGuard";
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <Head>
                <title>EasyMealPlanner | Welcome</title>
            </Head>
            <main>
                <PersistGate persistor={persistor}>
                    <NavBar />
                    <ContentContainer>
                        {Component.requireAuth ?
                            <AuthGuard>
                                <Component {...pageProps} />
                            </AuthGuard>
                            :
                            <NoDuplicateAuthGuard>
                                <Component {...pageProps} />
                            </NoDuplicateAuthGuard>
                        }
                    </ContentContainer>
                </PersistGate>
            </main>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
};

export default wrapper.withRedux(MyApp);
