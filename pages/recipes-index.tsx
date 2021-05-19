import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";

const Page = styled.div`
    position: relative;
`;

const RecipeContainer = styled.div`
    display: grid;
    column-gap: 10px;
    row-gap: 30px;
    grid-template-columns: 1fr;
    justify-items: center;
    height: 100%;
    padding: 150px 0px;

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1500px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const RecipesIndex = () => (
    <>
        <Head>
            <title>EasyMealPlanner | Recipes</title>
        </Head>
        <Page>
            <RecipeSearchBar />
            <RecipeContainer>
                <RecipePreview />
                <RecipePreview />
                <RecipePreview />
                <RecipePreview />
                <RecipePreview />
                <RecipePreview />
                <RecipePreview />
            </RecipeContainer>
    </Page>
    </>
);

export default RecipesIndex;