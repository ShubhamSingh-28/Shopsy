
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import catagoryReducer from "./categorySlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        catagory:catagoryReducer,
    }
})