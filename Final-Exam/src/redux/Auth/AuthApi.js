import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiLink from "../../services/apiClient";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await ApiLink.get("/users");
      const users = res.data;

      if (users.length === 0) {
        const newUser = { email: userData.email, password: userData.password };
        const addedUser = await ApiLink.post("/users", newUser);
        return addedUser.data; 
      }

      let user = users.find(
        (u) => u.email === userData.email && u.password === userData.password
      );

      if (!user) {
        return rejectWithValue("Invalid email or password");
      }

      return user;
    } catch (error) {
      return rejectWithValue("Login failed");
    }
  }
);


export const logout = createAsyncThunk("auth/logout", async () => {
    return null; 
  });