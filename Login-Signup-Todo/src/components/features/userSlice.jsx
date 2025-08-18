import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      console.log(state.user,'SIGNUP');
    },
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },

    logout: (state) => {
      state.user = null;
      console.log(state.user);
    },
  },
});

export const { signup,login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
