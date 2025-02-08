import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Layout from "./components/Layout/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {Object.keys(routes).map((key) => {
              const route = routes[key];
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
