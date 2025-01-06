import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoForm from "./components/TodoForm/TodoForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoForm/>
        <Footer/>
      </Provider>
    </>
  );
}

export default App;
