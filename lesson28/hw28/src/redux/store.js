import { configureStore } from "@reduxjs/toolkit";
import { todoSlice }  from "./slices/todoSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.js'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);