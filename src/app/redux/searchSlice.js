import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchsearch = createAsyncThunk('fetchsearch',async()=>{
    try {
        const response = await fetch(`/api/Search/iphone x`)
        const data = response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
})

const searchSlice = createSlice({
    name:"search",
    initialState:{
        Searchs:[],    
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchsearch.fulfilled,(state,action)=>{
            state.Searchs=action.payload;
        })
    }
})

export default searchSlice.reducer;