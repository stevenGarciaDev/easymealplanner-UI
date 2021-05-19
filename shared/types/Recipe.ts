import { Ingredient } from "./Ingredient";

export type RecipeType = {
    name: string;
    description: string;
    instructions: string[];
    ingredients: Ingredient[];
};