import { all } from "redux-saga/effects";
import {
  watchUpdateProduct,
  watchAddProduct,
  watchFetchProduct,
  watchDeleteProduct,
} from "./watcher";

export default function* rootSaga() {
  yield all([
watchUpdateProduct(), watchAddProduct(), watchFetchProduct(), watchDeleteProduct()
  ]);
}
