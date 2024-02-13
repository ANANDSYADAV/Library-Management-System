import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './HomeSlice'

export const store = configureStore({
    reducer: HomeReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});