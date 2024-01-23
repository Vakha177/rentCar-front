import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import cardSlice from "../features/cardSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        cards: cardSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;