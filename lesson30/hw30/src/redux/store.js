import { configureStore } from "@reduxjs/toolkit";
import { todoSlice }  from "./slices/todoSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../redux/sagas/root'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);