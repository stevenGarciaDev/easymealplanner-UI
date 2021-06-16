import { MealPlanTypes } from "./meal-plan.types";

export type MealPlanType = {
    mealPlanId: number;
    mealPlan: any;
}

const initialState: MealPlanType = {
    mealPlanId: 0,
    mealPlan: {}
}

export const mealPlanReducer = (state: MealPlanType = initialState, action) => {
    switch (action.type) {
        case MealPlanTypes.SET_MEAL_PLAN_ID:
            const { id } = action.payload;
            return {
                ...state,
                mealPlanId: id
            };
        case MealPlanTypes.INITIALIZE_MEAL_PLAN:
            const { mealPlan } = action.payload;
            return {
                ...state,
                mealPlan
            };
        default:
            return state;
    }
}