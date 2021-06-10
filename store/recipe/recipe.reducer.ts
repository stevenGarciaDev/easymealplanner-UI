import { RecipeActionTypes } from "./recipe.types";

export type RecipeReducerType = {
    savedRecipeIds: number[];
    recipes: any[];
}

const initialState: RecipeReducerType = {
    savedRecipeIds: [],
    recipes: []
}

export const recipeReducer = (state: RecipeReducerType = initialState, action) => {
    switch (action.type) {
        case RecipeActionTypes.SET_SAVED_RECIPES:
            const { recipes } = action.payload;
            return {
                ...state,
                savedRecipeIds: recipes
            };
        default:
            return state;
    }
}