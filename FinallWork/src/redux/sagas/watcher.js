import { addProductAsync, deleteProduct, fetchStart, saveProductAsync} from "../slices/productsSlice";
import { takeEvery } from "redux-saga/effects";
import {
  updatedProductSaga,
  addProductSaga,
  fetchProductsSaga,
  deleteItemSaga,
} from "./workers";

export function* watchUpdateProduct() {
  yield takeEvery(saveProductAsync.type, updatedProductSaga);
}
export function* watchAddProduct() {
  yield takeEvery(addProductAsync.type, addProductSaga);
}
export function* watchFetchProduct() {
  yield takeEvery(fetchStart.type, fetchProductsSaga);
}
export function* watchDeleteProduct() {
  yield takeEvery(deleteProduct.type, deleteItemSaga);
}
