import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import blogReducer from "./post/Blogslice";

export const store=configureStore({
    reducer:{
        user:userReducer,
        blog:blogReducer
    }
})