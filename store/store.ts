import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistorReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from 'redux-persist';

const middlewares = [thunk];

const makeStore = () => {
    let storeInstance = createStore(
        persistorReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    const persistor = persistStore(storeInstance);
    // @ts-ignore
    storeInstance.__persistor = persistor;
    return storeInstance;
};

export const wrapper = createWrapper(makeStore, { debug: true });