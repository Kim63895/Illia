import { Formik, Form, Field } from "formik";
import Input from "../Input/Input"; 
import InputSchema from "../../Schemas/Schema"; 
import todoSlice from "../../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../redux/selectors"
import {Button} from "@mui/material"
const TodoForm = () => {
  const items = useSelector(selectors.items)

  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(todoSlice.actions.addItem({ id: +new Date(), text: values.name }));
    resetForm();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={onSubmit}
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
              }}
            />
            <Button type="submit" variant="contained" >Add Todo</Button>
          </Form>
        )}
      </Formik>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
