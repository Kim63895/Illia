import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Button } from "@mui/material";
import * as Yup from "yup";
import Input from "./components/Input/Input"

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setTodos((prevState) => [...prevState, values.name]);
    resetForm();
  };

  const InputSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <h1>Todo List</h1>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        validationSchema={InputSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="name"
              placeholder="Enter a todo"
              component={Input}
              style={{
                marginRight: "10px",
                padding: "5px",
                fontSize: "16px",
                border: errors.name && touched.name,
              }}
            />
            <Button variant="contained" type="submit">
              Add Todo
            </Button>
          </Form>
        )}
      </Formik>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
