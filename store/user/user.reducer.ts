import { UserActionTypes } from "./user.types";

export type UserReducerType = {
    id: number;
    username: string;
    token: string;
    errorMessage: string;
    role: string[];
};

const initialState: UserReducerType = {
    id: 0,
    username: '',
    token: '',
    errorMessage: '',
    role: []
};

export const userReducer = (state: UserReducerType = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.AUTHENTICATE_SUCCESS:
            const { id, username, token } = action.payload;
            return {
                ...state,
                errorMessage: '',
                id,
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
                state: initialState,
                token: ''
            }
        default:
            return state;
    }
}