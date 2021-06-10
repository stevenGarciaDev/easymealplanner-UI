import { RecipeActionTypes } from "./recipe.types";
import { getSavedRecipesAsync, saveRecipeAsync } from "../../services/recipeService";

export const setSavedRecipes = (recipes) => ({
    type: RecipeActionTypes.SET_SAVED_RECIPES,
    payload: {
        recipes
    }
});

export const getSavedRecipes = (customerId, token) => async (dispatch) => {
    try {
        const response = await getSavedRecipesAsync(customerId, token);
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

