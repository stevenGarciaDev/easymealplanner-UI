import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";

const Page = styled.div`
    position: relative;
`;

const RecipeContainer = styled.div`
    column-gap: 10px;
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-items: center;
    padding: 150px 10px;
    grid-gap: 30px;

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1600px) {
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
                <RecipePreview />
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