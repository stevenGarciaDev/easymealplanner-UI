import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { sidebarReducer } from "./sidebar/sidebar.reducer";
import { loaderReducer } from "./loading/loading.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
    loading: loaderReducer,
});
