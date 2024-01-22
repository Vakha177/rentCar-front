import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";

export const store = configureStore({
    reducer: {
        product: productSlice 
    }
})

export type RootState = ReturnType<typeof store.getState>;