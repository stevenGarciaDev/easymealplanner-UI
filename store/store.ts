import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistorReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from 'redux-persist';

const middlewares = [thunk];

const makeStore = () => createStore(
    persistorReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

const storeInstance = makeStore();

export const persistor = persistStore(storeInstance);

export const wrapper = createWrapper(makeStore, { debug: true });