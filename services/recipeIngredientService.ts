import fetch from "node-fetch";

const BASE_URL = "http://localhost:8080";

export async function getPossibleUnitsAsync() {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/recipe-ingredients/units`);
        return await response.json();
    } catch (error) {
        console.log("error", error);
        return Promise.reject(error);
    }
}