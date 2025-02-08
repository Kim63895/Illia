import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: [],
  isLoading: true,
  errors: {
    name: "",
    category: "",
    quantity: "",
    price: "",
    imgSrc: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
    state.isLoading = action.payload;
    },

    addProductAsync: (state) => {
      state.isLoading = false;
    },
    deleteProduct: (state) => {
      state.isLoading = false;
    },
    saveProductAsync: (state, action) => {
      state.items = state.items.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.isLoading = false;
    },
    fetchStart: (state) => {
      state.isLoading = false;
    },
    addProduct: (state, action) => {
     state.items = [...state.items, { ...action.payload, id: uuidv4() }];

      state.items = state.items.map((item, index) => ({
        ...item,
        displayId: index + 1,
      }));

      state.isLoading = false;
    },

    fetchItems: (state, action) => {
      state.items = action.payload;
      state.items = state.items.map((item, index) => ({
        ...item,
        displayId: index + 1,
      }));
      state.isLoading = false;
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.items = state.items.map((item, index) => ({
        ...item,
        displayId: index + 1,
      }));
      state.isLoading = false;
    },

    editItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );

      state.isLoading = false; 
    },
  },
});

export const {
  fetchItems,
  addProduct,
  addProductAsync,
  saveProductAsync,
  setError,
  deleteProduct,
  deleteItem,
  fetchStart,
  editItem,
  clearError,
  setLoading,
} = productsSlice.actions;
