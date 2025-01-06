import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { counter } from "../../redux/slice/counterSlice";
import { Button } from "@mui/material";

const ButtonIncrement = () => {
  const dispatch = useDispatch();
 const { validateForm, values } = useFormikContext(); 

  const onClick = async () => {
    const errors = await validateForm(); 
    if (Object.keys(errors).length === 0) {
     
      dispatch(counter.actions.increment());
    }
  };
  return (
    <Button type="submit" variant="contained" color="primary" onClick={onClick}>
     Add todo
    </Button>
  );

}

export default ButtonIncrement;
