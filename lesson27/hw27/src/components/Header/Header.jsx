import React from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import selectors from "../../redux/slices/selectors";
import { Typography } from "@mui/material";
import { addSwapi, clearItems, deleteSwapi } from "../../redux/slices/swapiSlice";

function Header() {
  const items = useSelector(selectors.items);
  const dispatch = useDispatch();

  const onSubmit = async (values) => dispatch(addSwapi(values.name));

  const handleClick = () => {
    dispatch(clearItems())
  }
  return (
    <>
      <h1>SWAPI</h1>
      <Formik initialValues={{ name: "people/1" }} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Typography component="span">https://swapi.py4e/api</Typography>
            <Field
              name="name"
              placeholder="people/1"
              style={{
                marginRight: "10px",
                padding: "5px",
                fontSize: "16px",
              }}
            />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Get Info
            </Button>
          </Form>
        )}
      </Formik>
      <ul>
        {items.map((item) => (
          <li 
          key={item.id} 
          style={{
            display: "flex",
            alignItems: "center",}}
          >{JSON.stringify(item.text)}</li>
        ))}
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          Clear
        </Button>
      </ul>
    </>
  );
}

export default Header;
