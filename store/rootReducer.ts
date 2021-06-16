import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { sidebarReducer } from "./sidebar/sidebar.reducer";
import { loaderReducer } from "./loading/loading.reducer";
import { recipeReducer } from "./recipe/recipe.reducer";
import { mealPlanReducer } from "./meal-plan/meal-plan.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['loading', 'user', 'sidebar', 'recipe', 'mealPlan'],
};

const appReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
    loading: loaderReducer,
    recipe: recipeReducer,
    mealPlan: mealPlanReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        storage.removeItem('persist:root');
        state = undefined;
    }

    return appReducer(state, action);
};

export const persistorReducer = persistReducer(persistConfig, rootReducer);
