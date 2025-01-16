import { API } from "../../constants/constant";
import { editItem, toggleCheckbox, deleteItem, fetchItems,  addItem} from "../slices/todoSlice";
import { call, put } from "redux-saga/effects";

 function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Http error");
    }
    return response.json();
  });
}

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
export {
  fetchItemsSaga,
  deleteItemSaga,
  addItemSaga,
  editItemSaga,
  saveCheckboxSaga,
};