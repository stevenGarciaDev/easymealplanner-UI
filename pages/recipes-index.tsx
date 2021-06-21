import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, selectUserId } from "../store/user/user.selectors";
import { selectSavedRecipeIds, selectTotalAmountOfRecipes } from "../store/recipe/recipe.selectors";
import Head from 'next/head';
import RecipeSearchBar from "../components/RecipeSearchBar";
import RecipePreview from "../components/RecipePreview";
import {
    getPaginatedRecipesAsync,
    getPaginatedRecipesByQueryAsync,
    saveRecipeAsync,
    unsaveRecipeAsync
} from "../services/recipeService";
import { setSavedRecipes } from "../store/recipe/recipe.actions";
import PaginatedPageNumber from "../components/PaginatedPageNumber";
import { Page, RecipeContainer } from "../shared/styles/recipeGrid";

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
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const AMOUNT_PER_PAGE = 8;

    useEffect(() => {
        if (displayingSearchedRecipes) {
            getMatchingRecipes(searchText, pageNumber, AMOUNT_PER_PAGE);
        } else {
            getPaginatedRecipesAsync(pageNumber, AMOUNT_PER_PAGE, userToken)
                .then(data => setRecipes(data));
        }
    }, [pageNumber, displayingSearchedRecipes]);

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
                <title>EasyMealPlanners | Recipes</title>
            </Head>
            <Page>
                <RecipeSearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    displaySearchResults={setIsDisplayingSearchedRecipes}
                    setRecipeAmountBasedOnSearch={setRecipeAmountBasedOnSearch}
                    setPageNumber={setPageNumber}
                />
                <RecipeContainer>
                    {recipesToDisplay.length > 0 && 
                    recipesToDisplay.map(({ id, name, recipeImages }) => {
                        const mainImageLink = recipeImages[0].imageLink;
                        const savedStatus = isRecipeSaved(id);
                        return (
                            <RecipePreview
                                key={id}
                                id={id}
                                name={name}
                                imageLink={mainImageLink}
                                saved={savedStatus}
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