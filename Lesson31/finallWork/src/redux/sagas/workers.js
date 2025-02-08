
import { call, put } from "redux-saga/effects";
import { deleteItem, fetchItems, addProduct, editItem, saveProductAsync } from "../slices/productsSlice";
import api from "../../utils/api";
import { setLoading } from "../slices/productsSlice";


function* updatedProductSaga(action) {
   try {
     yield put(setLoading(true))
     const updatedProduct = yield call(api.updateProduct, action.payload.id, action.payload);
      yield put(editItem(updatedProduct));
   } catch (error) {
     console.error( error);
   }
}
function* addProductSaga(action) {
  try {
     yield put(setLoading(true))
    const product = yield call(api.addProductApi, action.payload);
    yield put(addProduct(product.data));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
 function* fetchProductsSaga() {
   try {
     yield put(setLoading(true))
     const {data: products} = yield call(api.getProducts);
     yield put(fetchItems(products));
   } catch (error) {
     console.error("Fetch error:", error);
   }
 }
function* deleteItemSaga(action) {
  try {
     yield put(setLoading(true))
     yield call(api.deleteProduct, action.payload)
  
    yield put(deleteItem(action.payload));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
export { deleteItemSaga, updatedProductSaga, addProductSaga, fetchProductsSaga };