import { createSelector } from 'reselect';

export const selectMealPlanSlice = (state) => state.mealPlan;

export const selectMealPlanId = createSelector(
    [selectMealPlanSlice],
    (mealPlanSlice) => mealPlanSlice.mealPlanId
);

export const selectMealPlan = createSelector(
    [selectMealPlanSlice],
    (mealPlanSlice) => mealPlanSlice.mealPlan
);