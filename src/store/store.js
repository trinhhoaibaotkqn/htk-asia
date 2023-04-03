import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commonReducer from "./commonSlice";

const rootReducer = combineReducers({ common: commonReducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})