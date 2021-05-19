import { UserTypes } from "./user.types";

type UserReducerType = {
    name: string;
    token: string;
};

const initialState: UserReducerType = {
    name: '',
    token: ''
}

export const userReducer = (state: UserReducerType = initialState, action) => {
    switch (action.type) {
        case UserTypes.LOGIN:
            const { name, token } = action;
            return {
                ...state,
                name,
                token
            };
        case UserTypes.SIGNUP:
            return state;
        case UserTypes.LOGOUT:
            return state;
        default:
            return state;
    }
    return state;
}