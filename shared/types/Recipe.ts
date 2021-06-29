import { Ingredient } from "./Ingredient";

export type RecipeType = {
    name: string;
    description: string;
    instructions: string[];
    ingredients: Ingredient[];
    defaultServingSize: number;
    protein: number;
    carbs: number;
    fat: number;
};