import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: false };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    deleteTodo: (state) => {
      state.loading = true;
    },
    addTodo: (state) => {
      state.loading = true;
    }, 
    toggleCheckbox: (state, action) => {
      state.items = state.items.map((item) => item.id === action.payload.id ? {...item, completed: action.payload.completed} : item)
      state.loading = false;
    },
    editItem: (state, action) => {
      state.items = state.items.map( (item) => item.id === action.payload.id ? {...item, ...action.payload} : item);
      state.loading = false;
    },
    clearItems: (state) => {
      state.items = [];
    },
    fetchStart: (state) => {
      state.loading = true;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.loading = false;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const { addItem, toggleCheckbox, editItem, deleteTodo, addTodo, fetchItems, clearItems, fetchStart, deleteItem } = todoSlice.actions;


