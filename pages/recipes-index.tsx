import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, selectUserId } from "../store/user/user.selectors";
import { selectSavedRecipeIds } from "../store/recipe/recipe.selectors";
import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";
import {
    getPaginatedRecipesAsync,
    saveRecipeAsync,
    unsaveRecipeAsync
} from "../services/recipeService";
import { setSavedRecipes } from "../store/recipe/recipe.actions";

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
    const userId = useSelector(selectUserId);
    const savedRecipeIds = useSelector(selectSavedRecipeIds);
    const [recipes, setRecipes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const response = getPaginatedRecipesAsync(0, 6, userToken)
            .then(data => setRecipes(data));
    }, []);

    const isRecipeSaved = (recipeIndex) => {
        if (savedRecipeIds === null || savedRecipeIds.length === 0) return false;
        const foundIndex = savedRecipeIds.indexOf(recipeIndex);
        console.log("foundIndex", foundIndex);

        return foundIndex !== -1 ? true : false;
    }

    const saveRecipe = async (recipeId) => {
        const recipeIdsCopy = [...savedRecipeIds, recipeId];
        dispatch(setSavedRecipes(recipeIdsCopy));

        await saveRecipeAsync(userId, recipeId, userToken);
    }

    const unsaveRecipe = async (recipeId) => {
        const updatedRecipeIds = savedRecipeIds.filter((id) => id !== recipeId);
        dispatch(setSavedRecipes(updatedRecipeIds));

        await unsaveRecipeAsync(userId, recipeId, userToken);
    }

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
                                saved={isRecipeSaved(id)}
                                saveRecipe={saveRecipe}
                                unsaveRecipe={unsaveRecipe}
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