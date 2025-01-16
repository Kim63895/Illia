import {
  editTodo,
  checkboxTodo,
  addTodo,
  fetchStart,
  deleteTodo,
} from "../slices/todoSlice";
import { takeEvery } from "redux-saga/effects";
import {
  fetchItemsSaga,
  deleteItemSaga,
  addItemSaga,
  editItemSaga,
  saveCheckboxSaga,
} from "./workers";

export function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

export function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemSaga);
}

export function* watchAddTodo() {
  yield takeEvery(addTodo.type, addItemSaga);
}

export function* watchEditTodo() {
  yield takeEvery(editTodo.type, editItemSaga);
}

export function* watchBoxTodo() {
  yield takeEvery(checkboxTodo.type, saveCheckboxSaga);
}
