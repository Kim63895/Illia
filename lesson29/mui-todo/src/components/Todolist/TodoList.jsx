import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../redux/slices/selectors.js";
import { Formik, Form, Field } from "formik";
import { Button } from "@mui/material";
import ItemList from "../ItemList/ItemList.jsx";
import { addTodo, fetchStart } from "../redux/slices/todoSlice.js";

function TodoForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);

  const onSubmit = (values, { resetForm }) => {
    dispatch(addTodo(values.name));
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  return (
    <>
      <h1>Todo</h1>
      <Formik initialValues={{ name: "" }} onSubmit={onSubmit}>
        <Form>
          <Field
            name="name"
            placeholder="Enter todo"
            style={{
              marginRight: "5px",
              padding: "4px",
              fontSize: "16px",
            }}
          />
          <Button variant="outlined" style={{padding: 4, marginBottom: 5}} type="submit" disabled={isLoading}>
            Add
          </Button>
        </Form>
      </Formik>
      <ItemList />
    </>
  );
}

export default TodoForm;
