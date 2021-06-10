import { UserActionTypes } from "./user.types";
import { loginUserAsync, registerUserAsync } from "../../services/userService";
import { LoginFormType } from "../../shared/types/LoginFormType";
import { RegisterFormType } from "../../shared/types/RegisterFormType";

export const authenticateSuccess = (id, name, token) => ({
    type: UserActionTypes.AUTHENTICATE_SUCCESS,
    payload: {
        id,
        username: name,
        token
    }
});

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT
})

export const setUserErrorMessage = (message) => ({
    type: UserActionTypes.SET_ERROR_MESSAGE,
    payload: {
        errorMessage: message
    }
});

export const login = (loginForm: LoginFormType) => async (dispatch) => {
    try {
        const response = await loginUserAsync(loginForm);
        const { id, username, jwt } = response;
        if (!id || !username || !jwt) throw new Error(response.message);
        dispatch(authenticateSuccess(id, username, jwt));
    } catch (error) {
        dispatch(setUserErrorMessage(error.message));
    }
}

export const register = (registerForm: RegisterFormType) => async (dispatch) => {
    try {
        const response = await registerUserAsync(registerForm);
        const { id, username, jwt } = response;
        if (!id || !username || !jwt) throw new Error(response.message);
        dispatch(authenticateSuccess(id, username, jwt));
    } catch (error) {
        dispatch(setUserErrorMessage(error.message));
    }
}
