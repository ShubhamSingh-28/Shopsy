import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//https://dummyjson.com/products?limit=100

export const fetchProducts = createAsyncThunk('fetchProducts',async({skip})=>{
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${skip}`)
        //console.log(typeof skip);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})
export const fetchProductsById = createAsyncThunk('fetchProductsById',async({id})=>{
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        //console.log(typeof skip);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})
const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        productsById:[]    
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
        }).addCase(fetchProductsById.fulfilled,(state,action)=>{
            state.productsById=action.payload;
        })
    }
})

export default productSlice.reducer;