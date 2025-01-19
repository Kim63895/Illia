import { configureStore } from "@reduxjs/toolkit";
import { todoSlice }  from "./slices/todoSlice";
import  createSagaMiddleware  from "redux-saga";
import rootSaga from '../redux/sagas/root';
import { swapiSlice } from "../redux/slicesSwupi/swapiSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    todos: swapiSlice.reducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);