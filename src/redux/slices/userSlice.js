import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    registerSuccess: false,
    duplicateEmail: false,
  },
  reducers: {
    saveUserLogin: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    resetFormResgister: (state, action) => {
      return {
        ...state,
        registerSuccess: action.payload,
      };
    },
  },
});

export const { saveUserLogin, resetFormResgister } = userSlice.actions;
