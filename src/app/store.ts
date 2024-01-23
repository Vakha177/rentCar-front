import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import applicationSlice from "../features/applicationSlice";


export const store = configureStore({
    reducer: {
        product: productSlice,
        application: applicationSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;