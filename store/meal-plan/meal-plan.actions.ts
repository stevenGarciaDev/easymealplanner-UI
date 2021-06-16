import { MealPlanTypes } from "./meal-plan.types";
import {
    getMealPlanIdByCustomerAsync,
    getMealPlanByCustomerIdAsync,
    addRecipeToMealPlanAsync
} from "../../services/mealPlanService";
import { initializeMealPlanStructure, updateMealPlan } from "./meal-plan.util";
import { AddMealPlanRecipe } from "../../shared/types/MealPlanRecipe";

export const setMealPlanId = (id: number) => ({
    type: MealPlanTypes.SET_MEAL_PLAN_ID,
    payload: {
        id
    }
});

export const initializeMealPlan = (mealPlan) => ({
    type: MealPlanTypes.INITIALIZE_MEAL_PLAN,
    payload: {
        mealPlan
    }
});

export const getMealPlanByUserId = (customerId: number, token: string) => async (dispatch) => {
    try {
        const response = await getMealPlanByCustomerIdAsync(customerId, token);
        const mealPlanStructure = initializeMealPlanStructure(response);
        dispatch(initializeMealPlan(mealPlanStructure));
    } catch (error) {
        console.log("error", error);
    }
}

export const getMealPlanIdBasedOnUser = (customerId: number, token: string) => async (dispatch) => {
    try {
        const response = await getMealPlanIdByCustomerAsync(customerId, token);
        dispatch(setMealPlanId(response));
    } catch (error) {
        console.log("error", error);
    }
}

export const addRecipeToMealPlan = (addRecipeParams: AddMealPlanRecipe) => async (dispatch) => {
        try {
            const {
                mealPlan,
                mealPlanId,
                recipeId,
                dayOfTheWeek,
                recipeNumber,
                token
            } = addRecipeParams;
            const response = await addRecipeToMealPlanAsync(mealPlanId, recipeId, dayOfTheWeek, recipeNumber, token);
            const updatedMealPlan = updateMealPlan(mealPlan, response);
            dispatch(initializeMealPlan(updatedMealPlan));
        } catch (error) {
            console.log("error", error);
        }
}