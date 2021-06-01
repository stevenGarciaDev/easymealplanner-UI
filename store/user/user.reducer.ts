import { UserActionTypes } from "./user.types";

export type UserReducerType = {
    username: string;
    token: string;
    errorMessage: string;
    role: string[];
};

const initialState: UserReducerType = {
    username: '',
    token: '',
    errorMessage: '',
    role: []
};

export const userReducer = (state: UserReducerType = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.AUTHENTICATE_SUCCESS:
            const { username, token } = action.payload;
            return {
                ...state,
                errorMessage: '',
                username,
                token
            };
        case UserActionTypes.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case UserActionTypes.LOGOUT:
            return {
                state: initialState
            }
        default:
            return state;
    }
}