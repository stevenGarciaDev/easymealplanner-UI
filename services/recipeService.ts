import fetch from "node-fetch";
import { RecipeType } from "../shared/types/Recipe";

const BASE_URL = process.env.API_URL || "http://localhost:8080/api/v1";

export async function createRecipeAsync(recipeInfo: RecipeType, image: File, token: string) {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('recipe', JSON.stringify(recipeInfo));

    await fetch(`${BASE_URL}/recipes`, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export async function getPaginatedRecipesAsync(pageStart: number, pageSize: number, token: string) {
    const response = await fetch(`${BASE_URL}/recipes?page=${pageStart}&size=${pageSize}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function getRecipeByName(name: string, token: string) {
    const response = await fetch(`${BASE_URL}/recipes/${name}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}