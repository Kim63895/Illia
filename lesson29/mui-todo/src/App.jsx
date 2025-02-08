import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import TodoList from './components/Todolist/TodoList'
import Swupi from './components/Swapi/Swapi'
import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Box sx={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/swapi" element={<Swupi />} />
            </Routes>
          </Box>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
