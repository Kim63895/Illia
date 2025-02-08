import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  currentProduct: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.currentProduct = action.payload || null; 
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.currentProduct = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
