import { RecipeActionTypes } from "./recipe.types";
import {
    getSavedRecipeIdsAsync,
    saveRecipeAsync,
    getTotalNumberOfRecipesAsync
} from "../../services/recipeService";

export const setSavedRecipes = (recipes) => ({
    type: RecipeActionTypes.SET_SAVED_RECIPES,
    payload: {
        recipes
    }
});

export const setTotalNumberOfRecipes = (amount: number) => ({
    type: RecipeActionTypes.SET_TOTAL_NUMBER_OF_RECIPES,
    payload: {
        total: amount
    }
});

export const getTotalNumberOfRecipes = (token: string) => async (dispatch) => {
    try {
        const response = await getTotalNumberOfRecipesAsync(token);
        dispatch(setTotalNumberOfRecipes(response));
    } catch (error) {
        console.log("error", error);
    }
}

export const getSavedRecipes = (customerId, token) => async (dispatch) => {
    try {
        const response = await getSavedRecipeIdsAsync(customerId, token);
        dispatch(setSavedRecipes(response));
    } catch (error) {
        console.log("error", error);
    }
}

export const performSaveRecipe = (customerId, recipeId, token) => async (dispatch) => {
    try {
        await saveRecipeAsync(customerId, recipeId, token);
    } catch (error) {
        console.log("error", error);
    }
}

