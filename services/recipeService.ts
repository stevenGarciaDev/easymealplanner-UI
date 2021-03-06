import fetch from "node-fetch";
import { RecipeType } from "../shared/types/Recipe";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

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

export async function saveRecipeAsync(customerId: number, recipeId: number, token: string) {
    await fetch(`${BASE_URL}/saved-recipes/${recipeId}/${customerId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export async function unsaveRecipeAsync(customerId: number, recipeId: number, token: string) {
    await fetch(`${BASE_URL}/saved-recipes/${recipeId}/${customerId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export async function getSavedRecipeIdsAsync(customerId: number, token: string) {
    const response = await fetch(`${BASE_URL}/saved-recipes/${customerId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function getPaginatedSavedRecipesAsync(customerId: number, pageStart: number, pageSize: number, token: string) {
    const response = await fetch(`${BASE_URL}/saved-recipes/all/${customerId}?page=${pageStart}&size=${pageSize}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
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

export async function getTotalNumberOfRecipesAsync(token: string) {
    const response = await fetch(`${BASE_URL}/recipes/total-count`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function getTotalNumberOfRecipesContainingTextAsync(searchQuery: string, token: string) {
    const response = await fetch(`${BASE_URL}/recipes/total-count/${searchQuery}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function getPaginatedRecipesByQueryAsync(queryText: string, pageStart: number, pageSize: number, token: string) {
    const response = await fetch(`${BASE_URL}/recipes/match/${queryText}?page=${pageStart}&size=${pageSize}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}