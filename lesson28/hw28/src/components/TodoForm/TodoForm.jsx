import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { Formik, Form, Field } from "formik";
import { addTodo, deleteTodo, editItem, fetchStart, clearItems, toggleCheckbox} from "../../redux/slices/todoSlice";
import { Button, Checkbox } from "@mui/material";

function TodoForm() {
  const items = useSelector(selectors.items);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);
  const [editMode, setEditMode] = useState({ id: null, text: "" });

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

 const onSubmit = async values => dispatch(addTodo(values.name));



  const handleEdit = (id, text) => {
    setEditMode({ id, text });
  };

const handleSave = (id) => {
   
    dispatch(editItem({ id, text: editMode.text }));
    setEditMode({ id: null, text: "" });
  
};
 const handleSaveCheckbox = (id, completed) => {

  dispatch(toggleCheckbox({id, completed}))
 }

  const handleClear = () => dispatch(clearItems());

  const handleClick = (id) => { dispatch(deleteTodo(id)) };
  return (
    <>
      <h1>Todo</h1>
      <Formik initialValues={{ name: "" }} onSubmit={onSubmit}>
        <Form>
          <Field
            name="name"
            placeholder="Enter todo"
            style={{
              marginRight: "10px",
              padding: "5px",
              fontSize: "16px",
            }}
          />
          <Button variant="outlined" type="submit" disabled={isLoading}>
            Add
          </Button>
        </Form>
      </Formik>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            {editMode.id === item.id ? (
              <input
                type="text"
                value={editMode.text}
                onChange={(e) =>
                  setEditMode({ ...editMode, text: e.target.value })
                }
                style={{
                  marginRight: "10px",
                  padding: "5px",
                  fontSize: "16px",
                  flex: 1,
                }}
              />
            ) : (
              <span style={{ flex: 1 }}>{item.text}</span>
            )}
            <Checkbox 
            checked={item.completed}
            onChange={() => handleSaveCheckbox(item.id, !item.completed)} />
            {editMode.id === item.id ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => handleSave(item.id)}
                disabled={isLoading}
                style={{ marginRight: "10px" }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => handleEdit(item.id, item.text)}
                style={{ marginRight: "10px" }}
              >
                Edit
              </Button>
            )}
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleClick(item.id)}
              disabled={isLoading}
            >
              Delete
            </Button>
          </li>
        ))}
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={handleClear}
          style={{ marginTop: "20px" }}
        >
          Clear
        </Button>
      </ul>
    </>
  );
}

export default TodoForm;
