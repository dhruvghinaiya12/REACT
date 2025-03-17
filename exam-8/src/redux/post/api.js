import { createAsyncThunk } from "@reduxjs/toolkit"
import ApiLink from "../../config/Api"

export const getBlogs=createAsyncThunk("/post/get",async()=>{
    let res=await ApiLink.get("/Blogs")
    return res.data;
})

export const createBlogs=createAsyncThunk("/post/create",async(payload)=>{
    let res=await ApiLink.post("/Blogs",payload)
    return res.data;
})