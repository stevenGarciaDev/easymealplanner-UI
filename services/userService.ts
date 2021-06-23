import fetch from "node-fetch";
import { RegisterFormType } from "../shared/types/RegisterFormType";
import { LoginFormType } from "../shared/types/LoginFormType";

const BASE_URL = process.env.API_URL || "http://localhost:8080/api/v1";

export async function registerUserAsync(registerForm: RegisterFormType) {
    const response = await fetch(`${BASE_URL}/customers`, {
        method: 'POST',
        body: JSON.stringify(registerForm),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

export async function loginUserAsync(loginForm: LoginFormType) {
    const response = await fetch(`${BASE_URL}/customers/login`, {
        method: 'POST',
        body: JSON.stringify(loginForm),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
}

export async function requestToResetPassword(email: string) {
    await fetch(`${BASE_URL}/send-email-forgotten-password`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
    });
}