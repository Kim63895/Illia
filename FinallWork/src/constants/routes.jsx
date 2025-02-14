import Login from '../pages/Login/Login.jsx';
import Preview from '../pages/Preview/Preview.jsx';
import Products from '../pages/Products/Products.jsx';

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
    id: 1,
  },
  preview: {
    element: <Preview />,
    path: "/preview",
    id: 2,
  },
  products: {
    element: <Products />,
    path: "/products",
    id: 3,
  },

};