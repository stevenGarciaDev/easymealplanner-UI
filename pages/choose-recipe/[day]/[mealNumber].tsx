import { useState, useEffect } from "react";
import Head from 'next/head';
import styled from "styled-components";
import ChooseRecipePreview from "../../../components/ChooseRecipePreview";
import PaginatedPageNumber from "../../../components/PaginatedPageNumber";
import { Page, RecipeContainer } from "../../../shared/styles/recipeGrid";
import RecipeSearchBar from "../../../components/RecipeSearchBar";
import { getPaginatedRecipesByQueryAsync, getPaginatedSavedRecipesAsync } from "../../../services/recipeService";
import { selectUserId, selectUserToken } from "../../../store/user/user.selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfSavedRecipeIds } from "../../../store/recipe/recipe.selectors";
import { useRouter } from "next/router";
import { selectMealPlan } from "../../../store/meal-plan/meal-plan.selectors";
import { addRecipeToMealPlan } from "../../../store/meal-plan/meal-plan.actions";

const CenterTitle = styled.h1`
    font-size: 2rem;
    position: relative;
    text-align: center;
    top: 150px;
`;

const ChooseRecipeContainer = styled(RecipeContainer)`
    padding-top: 200px;
`;

const ChooseRecipe = () => {
    const router = useRouter();
    const { day, mealNumber } = router.query;

    const userToken = useSelector(selectUserToken);
    const userId = useSelector(selectUserId);
    const amountOfSavedRecipes = useSelector(selectNumberOfSavedRecipeIds);
    const mealPlan = useSelector(selectMealPlan);

    const [savedRecipes, setSavedRecipes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [displayingSearchedRecipes, setIsDisplayingSearchedRecipes] = useState(false);
    const [recipesBasedOnSearch, setRecipesBasedOnSearch] = useState([]);
    const [totalMatchingBasedOnSearch, setRecipeAmountBasedOnSearch] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    const dispatch = useDispatch();

    const AMOUNT_PER_PAGE = 8;

    useEffect(() => {
        if (displayingSearchedRecipes) {
            getMatchingRecipes(searchText, pageNumber, AMOUNT_PER_PAGE);
        } else {
            getPaginatedSavedRecipes();
        }
        
    }, [pageNumber, displayingSearchedRecipes]);

    const updateMealPlan = async (mealPlanId: number, recipeId: number, dayOfTheWeek: string, recipeNumber: number) => {
        const newRecipeParam = {
            mealPlan,
            mealPlanId,
            recipeId,
            dayOfTheWeek,
            recipeNumber,
            token: userToken
        }
        dispatch(addRecipeToMealPlan(newRecipeParam));
        setTimeout(() => router.push('/meal-plan'), 500);
    }

    const updatePage = (page: number) => {
        setPageNumber(page);
    }

    const getMatchingRecipes = async (searchText: string, pageStart: number, pageSize: number) => {
        const paginatedMatchedRecipes = await getPaginatedRecipesByQueryAsync(searchText, pageStart, pageSize, userToken);
        setRecipesBasedOnSearch(paginatedMatchedRecipes);
    }

    const getPaginatedSavedRecipes = async () => {
        await getPaginatedSavedRecipesAsync(userId, pageNumber, AMOUNT_PER_PAGE, userToken)
                .then(data => setSavedRecipes(data))
                .catch(error => console.log(error));
    }
    
    const recipesToDisplay = displayingSearchedRecipes ? recipesBasedOnSearch : savedRecipes;
    const totalMatchingRecipes = displayingSearchedRecipes ? totalMatchingBasedOnSearch : amountOfSavedRecipes;
    return (
        <>
            <Head>
                <title>EasyMealPlanners | Choose Recipe</title>
            </Head>
            <Page>
                <RecipeSearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    displaySearchResults={setIsDisplayingSearchedRecipes}
                    setRecipeAmountBasedOnSearch={setRecipeAmountBasedOnSearch}
                    setPageNumber={setPageNumber}
                />
                <CenterTitle>Choose from your Saved Recipes</CenterTitle>
                <ChooseRecipeContainer>
                    {recipesToDisplay.length > 0 && recipesToDisplay.map(({ id, name, recipeImages}) => {
                        const mainImageLink = recipeImages[0].imageLink;
                        return (
                            <ChooseRecipePreview
                                key={id}
                                recipeId={id}
                                name={name}
                                imageLink={mainImageLink}
                                mealPlanId={1}
                                // @ts-ignore
                                dayOfTheWeek={day}
                                // @ts-ignore
                                recipeNumber={parseInt(mealNumber)}
                                updateMealPlan={updateMealPlan}
                            />
                        )
                    })}
                </ChooseRecipeContainer>
                <PaginatedPageNumber
                    currentPage={pageNumber}
                    updatePage={updatePage}
                    totalNumberOfRecipes={totalMatchingRecipes}
                    recipesPerPage={AMOUNT_PER_PAGE}
                />
            </Page>
        </>
    );
}

ChooseRecipe.requireAuth = true;

export default ChooseRecipe;