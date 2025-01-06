import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./slices/todoSlice";
import { counter } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    counter: counter.reducer,
  },
});
