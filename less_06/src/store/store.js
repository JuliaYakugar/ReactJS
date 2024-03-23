import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducers/ProductsSlice.js";
 
export const store = configureStore({
    reducer: {
        productsList: productSlice,
    },
});