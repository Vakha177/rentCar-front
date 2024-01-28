import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import applicationSlice from "../features/applicationSlice";
import cardSlice from "../features/cardSlice";
import chatSlice from "../features/chatSlice";

import commentsSlice from "../features/commentsSlice";
import brandSlice from "../features/brandSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        application: applicationSlice,
        cards: cardSlice ,
        chat: chatSlice,
        comments : commentsSlice ,
        brands: brandSlice,
        categories: categorySlice
    }
})

export type RootState = ReturnType<typeof store.getState>;