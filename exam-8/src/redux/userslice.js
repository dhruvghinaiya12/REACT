import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: { isLogin: false },
  reducers: {
    Login: (state) => {
      state.isLogin = true;
    }
  },
});

export const { Login } = userslice.actions;
export default userslice.reducer;
