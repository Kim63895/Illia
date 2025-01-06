import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoForm from "./components/TodoForm/TodoForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoForm/>
        <Header/>
      </Provider>
    </>
  );
}

export default App;
