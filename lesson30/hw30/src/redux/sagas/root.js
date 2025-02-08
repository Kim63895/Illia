import { all } from "redux-saga/effects";
import {
  watchFetchTodos,
  watchDeleteTodo,
  watchAddTodo,
  watchEditTodo,
  watchBoxTodo,
} from "./watcher";

export default function* rootSaga() {
  yield all([
    watchDeleteTodo(),
    watchFetchTodos(),
    watchAddTodo(),
    watchEditTodo(),
    watchBoxTodo(),
  ]);
}
