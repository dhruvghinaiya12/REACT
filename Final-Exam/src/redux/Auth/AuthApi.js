import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiLink from "../../services/apiClient";
import Cookies from "js-cookie";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await ApiLink.get("/users");
      const users = res.data;

      let user = users.find(
        (u) => u.email === userData.email && u.password === userData.password
      );

      if (!user) {
        return rejectWithValue("Invalid email or password");
      }

      Cookies.set("user", JSON.stringify(user), { expires: 1 }); 

      return user;
    } catch (error) {
      return rejectWithValue("Login failed");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  Cookies.remove("user");
  return null; 
});
