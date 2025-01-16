import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../constants/constant";
import {   editItem,  toggleCheckbox, addTodo, deleteItem, fetchItems, fetchStart,deleteTodo, addItem,} from "./slices/todoSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Http error");
    }
    return response.json();
  });
}

// Worker Sagas
function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_TODO);
    yield put(fetchItems(todos));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function* deleteItemSaga(action) {
  try {
    yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
      method: "DELETE",
    });
    yield put(deleteItem(action.payload));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function* addItemSaga(action) {
    console.log("Action Payload:", action.payload);
  try {
    const todo = yield call(fetchHelper, API.URL_TODO, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: action.payload }),
    });
    yield put(addItem(todo));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function* editItemSaga(action) {
  try {
    const updatedTodo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: action.payload.text }),
      }
    );
    const todo = { ...action.payload, ...updatedTodo };
    yield put(editItem(todo));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function* saveCheckboxSaga(action) {
  try {
    const updatedTodo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: action.payload.completed }),
      }
    );
    
    yield put(toggleCheckbox(updatedTodo));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Watcher Sagas
function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemSaga);
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, addItemSaga);
}

function* watchEditTodo() {
  yield takeEvery(editItem.type, editItemSaga);
}
function* watchBoxTodo() {
  yield takeEvery(toggleCheckbox.type, saveCheckboxSaga);
}

// Root Saga
export default function* rootSaga() {
  yield all([
watchDeleteTodo(), watchFetchTodos(), watchAddTodo(), watchEditTodo(), watchBoxTodo()]);}
