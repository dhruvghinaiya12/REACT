import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthSlice";
import studentsReducer from "./students/studentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
  },
});

export default store;
