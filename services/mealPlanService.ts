import fetch from "node-fetch";

const BASE_URL = process.env.API_URL || "http://localhost:8080/api/v1";

export async function addRecipeToMealPlanAsync(
    mealPlanId: number,
    recipeId: number,
    dayOfTheWeek: string,
    recipeNumber: number,
    token: string) {
        const day = dayOfTheWeek.toUpperCase();
        const response = await fetch(`${BASE_URL}/meal-plan-recipes/add/${mealPlanId}/${recipeId}`, {
            method: 'POST',
            body: JSON.stringify({
                dayOfTheWeek: day, recipeNumber
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
}

export async function getMealPlanByCustomerIdAsync(id: number, token: string) {
    const response = await fetch(`${BASE_URL}/meal-plan-recipes/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function getMealPlanIdByCustomerAsync(id: number, token: string) {
    const response = await fetch(`${BASE_URL}/meal-plans/customer/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}