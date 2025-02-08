import { useState } from "react";
import {
  deleteTodo,
  editItem,
  clearItems,
  toggleCheckbox,
} from "../redux/slices/todoSlice";
import { Button, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../redux/slices/selectors";

function ItemList() {
  const [editMode, setEditMode] = useState({ id: null, text: "" });
  const items = useSelector(selectors.items);
  const isLoading = useSelector(selectors.isLoading);
  const dispatch = useDispatch();

  const handleEdit = (id, text) => {
    setEditMode({ id, text });
  };

  const handleSave = (id) => {
    dispatch(editItem({ id, text: editMode.text }));
    setEditMode({ id: null, text: "" });
  };

  const handleSaveCheckbox = (id, completed) => {
    dispatch(toggleCheckbox({ id, completed }));
  };

  const handleClear = () => dispatch(clearItems());

  const handleClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
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
            onChange={() => handleSaveCheckbox(item.id, !item.completed)}
          />
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
  );
}
export default ItemList;
