
import TodoForm from './components/TodoForm/TodoForm'
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {

 return (
    <Provider store={store}> 
        <TodoForm/>
        </Provider>
  
 );
}

export default App
