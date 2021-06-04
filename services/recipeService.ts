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
