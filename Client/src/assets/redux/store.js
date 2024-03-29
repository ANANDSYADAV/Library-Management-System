import { configureStore } from "@reduxjs/toolkit";
import { homeReducer, currentUserReducer } from "./HomeSlice";

export const store = configureStore({
    reducer: {
        HomeReducer: homeReducer,
        currentUserReducer: currentUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});
