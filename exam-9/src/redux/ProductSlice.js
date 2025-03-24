import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./api";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productslice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading=true;
            state.error=null;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
        })
    }
})

export default productslice.reducer;