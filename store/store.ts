import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { createWrapper, MakeStore } from "next-redux-wrapper";

import { UserReducerType } from "./user/user.reducer";
import { SidebarReducerType } from "./sidebar/sidebar.reducer";

export type State = {
    user: UserReducerType;
    sidebar: SidebarReducerType;
};

const middlewares = [thunk];

const makeStore =  () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const wrapper = createWrapper(makeStore, { debug: true });