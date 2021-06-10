import { createSelector } from 'reselect';

export const selectRecipesSlice = (state) => state.recipe;

export const selectSavedRecipeIds = createSelector(
    [selectRecipesSlice],
    (recipe) => recipe.savedRecipeIds
);
