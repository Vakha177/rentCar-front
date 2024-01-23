import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import applicationSlice from "../features/applicationSlice";


import cardSlice from "../features/cardSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        application: applicationSlice,
        cards: cardSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;