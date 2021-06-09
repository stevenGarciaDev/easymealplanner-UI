import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../store/user/user.selectors";
import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";
import { getPaginatedRecipesAsync } from "../services/recipeService";

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

const RecipesIndex = () => {
    const userToken = useSelector(selectUserToken);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const response = getPaginatedRecipesAsync(0, 6, userToken)
            .then(data => setRecipes(data));
            
    }, []);

    return (
        <>
            <Head>
                <title>EasyMealPlanner | Recipes</title>
            </Head>
            <Page>
                <RecipeSearchBar />
                <RecipeContainer>
                    {recipes.length > 0 && 
                    recipes.map(({ id, name, recipeImages }) => {
                        const mainImageLink = recipeImages[0].imageLink;
                        return (
                            <RecipePreview
                                key={id}
                                id={id}
                                name={name}
                                imageLink={mainImageLink}
                            />
                        )
                    })}
                </RecipeContainer>
            </Page>
        </>
    );
};

RecipesIndex.requireAuth = true;

export default RecipesIndex;