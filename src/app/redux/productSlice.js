import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('fetchProducts',async()=>{
    try {
        const response = await fetch(`/api/product`)     
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})
export const fetchProductsById = createAsyncThunk('fetchProductsById',async({id})=>{
    try {
        const response = await fetch(`/api/product/${id}`)
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