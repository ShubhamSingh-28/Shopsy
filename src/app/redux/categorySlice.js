import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//https://dummyjson.com/products?limit=100

export const fetchcatagory = createAsyncThunk('fetchProducts',async({skip})=>{
    try {
        const response = await fetch(`https://dummyjson.com/`)
        console.log(typeof skip);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})

const catagorySlice = createSlice({
    name:"catagory",
    initialState:{
        catagories:[],    
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchcatagory.fulfilled,(state,action)=>{
            state.catagories=action.payload;
        })
    }
})

export default catagorySlice.reducer;