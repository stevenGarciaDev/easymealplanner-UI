import { UserActionTypes } from "./user.types";
import { loginUserAsync, registerUserAsync } from "../../services/userService";
import { LoginFormType } from "../../shared/types/LoginFormType";
import { RegisterFormType } from "../../shared/types/RegisterFormType";

export const authenticateSuccess = (name, token) => ({
    type: UserActionTypes.AUTHENTICATE_SUCCESS,
    payload: {
        username: name,
        token
    }
});

export const setUserErrorMessage = (message) => ({
    type: UserActionTypes.SET_ERROR_MESSAGE,
    payload: {
        errorMessage: message
    }
});

export const login = (loginForm: LoginFormType) => async (dispatch) => {
    try {
        const response = await loginUserAsync(loginForm);
        console.log("response", response);
        dispatch(authenticateSuccess("test", "123"));
    } catch (error) {
        dispatch(setUserErrorMessage("Unable to login"));
    }
}

export const register = (registerForm: RegisterFormType) => async (dispatch) => {
    try {
        const { username, jwt } = await registerUserAsync(registerForm);
        dispatch(authenticateSuccess(username, jwt));
    } catch (error) {
        console.log("unable to register an account");
        dispatch(setUserErrorMessage("Unable to register an account."));
    }
}
