import { RecipeActionTypes } from "./recipe.types";

export type RecipeReducerType = {
    savedRecipeIds: number[];
    recipes: any[];
    totalAmount: number
}

const initialState: RecipeReducerType = {
    savedRecipeIds: [],
    recipes: [],
    totalAmount: 0
}

export const recipeReducer = (state: RecipeReducerType = initialState, action) => {
    switch (action.type) {
        case RecipeActionTypes.SET_SAVED_RECIPES:
            const { recipes } = action.payload;
            return {
                ...state,
                savedRecipeIds: recipes
            };
        case RecipeActionTypes.SET_TOTAL_NUMBER_OF_RECIPES:
            const { total } = action.payload;
            return {
                ...state,
                totalAmount: total
            };
        default:
            return state;
    }
}