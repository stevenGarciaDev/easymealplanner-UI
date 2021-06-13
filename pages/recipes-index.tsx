import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, selectUserId } from "../store/user/user.selectors";
import { selectSavedRecipeIds, selectTotalAmountOfRecipes } from "../store/recipe/recipe.selectors";
import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";
import {
    getPaginatedRecipesAsync,
    getPaginatedRecipesByQueryAsync,
    saveRecipeAsync,
    unsaveRecipeAsync
} from "../services/recipeService";
import { setSavedRecipes } from "../store/recipe/recipe.actions";
import PaginatedPageNumber from "../components/PaginatedPageNumber";

const Page = styled.div`
    position: relative;
`;

const RecipeContainer = styled.div`
    column-gap: 10px;
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-items: center;
    padding: 150px 10px 50px 10px;
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
    const totalNumberOfRecipes = useSelector(selectTotalAmountOfRecipes);

    const [recipes, setRecipes] = useState([]);
    const [recipesBasedOnSearch, setRecipesBasedOnSearch] = useState([]);
    const [totalMatchingBasedOnSearch, setRecipeAmountBasedOnSearch] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [displayingSearchedRecipes, setIsDisplayingSearchedRecipes] = useState(false);

    const dispatch = useDispatch();
    const AMOUNT_PER_PAGE = 2;

    useEffect(() => {
        getPaginatedRecipesAsync(pageNumber, AMOUNT_PER_PAGE, userToken)
            .then(data => setRecipes(data));
    }, [pageNumber]);

    const isRecipeSaved = (recipeIndex) => {
        if (savedRecipeIds === null || savedRecipeIds.length === 0) return false;
        const foundIndex = savedRecipeIds.indexOf(recipeIndex);

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

    const updatePage = (page: number) => {
        setPageNumber(page);
    }

    const getMatchingRecipes = async (searchText: string, pageStart: number, pageSize: number) => {
        const paginatedMatchedRecipes = await getPaginatedRecipesByQueryAsync(searchText, pageStart, pageSize, userToken);
        setRecipesBasedOnSearch(paginatedMatchedRecipes);
    }

    const recipesToDisplay = displayingSearchedRecipes ? recipesBasedOnSearch : recipes;
    const totalMatchingRecipes = displayingSearchedRecipes ? totalMatchingBasedOnSearch : totalNumberOfRecipes;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Recipes</title>
            </Head>
            <Page>
                <RecipeSearchBar
                    getMatchingRecipes={getMatchingRecipes}
                    displaySearchResults={setIsDisplayingSearchedRecipes}
                    setRecipeAmountBasedOnSearch={setRecipeAmountBasedOnSearch}
                    setPageNumber={setPageNumber}
                    pageSize={AMOUNT_PER_PAGE}
                />
                <RecipeContainer>
                    {recipesToDisplay.length > 0 && 
                    recipesToDisplay.map(({ id, name, recipeImages }) => {
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
                <PaginatedPageNumber
                    currentPage={pageNumber}
                    updatePage={updatePage}
                    totalNumberOfRecipes={totalMatchingRecipes}
                    recipesPerPage={AMOUNT_PER_PAGE}
                />
            </Page>
        </>
    );
};

RecipesIndex.requireAuth = true;

export default RecipesIndex;