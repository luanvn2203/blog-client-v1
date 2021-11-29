import { createSlice } from "@reduxjs/toolkit";

export const modalState = createSlice({
  name: "modal",
  initialState: {
    modalLogin: false,
    modalRegister: false,
    modalOpen: false,
  },
  reducers: {
    onClickModalLogin: (state, action) => {
      return {
        ...state,
        modalLogin: action.payload,
      };
    },
    onClickModalRegister: (state, action) => {
      return {
        ...state,
        modalRegister: action.payload,
      };
    },
    onClickModalOpen: (state, action) => {
      return {
        ...state,
        modalOpen: action.payload,
      };
    },
  },
});

export const { onClickModalLogin, onClickModalRegister, onClickModalOpen } =
  modalState.actions;
