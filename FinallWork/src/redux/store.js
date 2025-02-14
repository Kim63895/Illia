import { configureStore } from "@reduxjs/toolkit";
import { productsSlice} from "./slices/productsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas/root";
import { modalSlice } from "../redux/slices/modalSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    product: productsSlice.reducer,
    
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
