import fetch from "node-fetch";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export async function getPossibleUnitsAsync(jwt: string) {
    try {
        const response = await fetch(`${BASE_URL}/recipe-ingredients/units`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
        return await response.json();
    } catch (error) {
        console.log("error", error);
        return Promise.reject(error);
    }
}