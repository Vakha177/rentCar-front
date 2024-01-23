import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import chatSlice from "../features/chatSlice";
export const store = configureStore({
    reducer: {
        product: productSlice ,
        chat: chatSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;