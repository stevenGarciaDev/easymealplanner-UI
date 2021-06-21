import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from "styled-components";
import { Button } from "../shared/styles/buttons";
import Card from "../components/CardMembership";

const Page = styled.div`
    height: 100vh;
    padding-bottom: 1000px;
    width: 100%;
`;

const Header = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    position: relative;
    top: -30px;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        color: #11562f;
        font-family: Inter,Arial,Helvetica,sans-serif;
        font-size: 4rem;
        margin: 30px 0px 0px 0px;
        text-align: center;
    }

    h3 {
        color: #61768f;
        font-size: 2rem;
        margin-bottom: 10px;
        text-align: center;
    }
`;

const GetStartedButton = styled(Button)`
    background-color: #FF3400;
    max-width: 250px;

    &:hover {
        background-color: #d62b00;
    }
`;

const MembershipOptionsContainer = styled.div`
    display: grid;
    justify-items: center;
    margin: 0 auto;
    padding-bottom: 100px;
    row-gap: 30px;
    width: 100%;

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
        width: 90%;
    }
    @media screen and (min-width: 1500px) {
        width: 80%;
    }
    @media screen and (min-width: 1700px) {
        width: 60%;
    }
`;


export default function Index() {
    return (
        <>
            <Head>
                <title>EasyMealPlanners | Homepage</title>
            </Head>
            <Page>
                <Header>
                    <div className="content">
                        <h2>We make meal planning easy.</h2>
                        <h3>Choose delicious recipes and prep for your week.</h3>
                        <Link href="/signup" passHref>
                            <GetStartedButton type="button">Get Started</GetStartedButton>
                        </Link>
                    </div>
                </Header>
                {/* <MembershipOptionsContainer>
                    <Card 
                        plan="Bronze"
                        price="Free"
                        subtitle="Limited access."
                        benefits={[
                            "Access to limited recipes",
                            "Ability to save recipes",
                            "Calculate calories",
                            "1 customizable meal plan"
                        ]}
                        backgroundColor="#00c3e6"
                    />
                    <Card 
                        plan="Silver"
                        price="$12"
                        subtitle="Unlock all recipes."
                        benefits={[
                            "Access to all recipes",
                            "Customizable serving sizes",
                            "Calculate calories and protein",
                            "Unlimited meal plans"
                        ]}
                        backgroundColor="#2584ff"
                    />
                    <Card
                        plan="Gold"
                        price="$99"
                        subtitle="Personalized coaching."
                        benefits={[
                            "1 on 1 coaching",
                            "Access to all recipes",
                            "Calculate all macronutrients",
                            "Unlimited meal plans"
                        ]}
                        backgroundColor="#00c3e6"
                    />
                </MembershipOptionsContainer> */}
            </Page>
        </>
    );
}