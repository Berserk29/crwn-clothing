import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// MIDDLEWARE
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
// if you want to replace logger
// import { loggerMiddleware } from "../middleware/logger";

import { rootSaga } from "./root-saga";
import userReducer from "./user/user.reducer";
import categoriesReducer from "./categories/categories.reducer"; 
import cartReducer from "./cart/cart.reducer";

const reducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers)

// When !production is false  --> midlewares logger and thunk will not work
const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares ,
    devTools: process.env.NODE_ENV !== 'production',
    
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
