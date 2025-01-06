import { Formik, Form, Field } from "formik";
import Input from "../Input/Input"; 
import InputSchema from "../Schema/Schema"; 
import todoSlice from "../../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonIncrement from "../ButtonIncrement/ButtonIncrement";

const TodoForm = () => {
  const todos = useSelector((state) => state.todos.items)
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
            <ButtonIncrement/>
          </Form>
        )}
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
