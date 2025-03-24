import { createAsyncThunk } from "@reduxjs/toolkit"
import ApiLink from "../config/Api";

export const getProducts=createAsyncThunk("/get",async()=>{
    let res=await ApiLink.get("/products")
    return res.data;
})

