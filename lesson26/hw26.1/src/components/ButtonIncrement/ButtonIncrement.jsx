import { useDispatch } from "react-redux";
import { counter } from "../../redux/slice/counterSlice";
import { Button } from "@mui/material";

const ButtonIncrement = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(counter.actions.increment());
  };

  return (
    <Button type="submit" variant="contained" color="primary" onClick={onClick}>
     Add todo
    </Button>
  );
};

export default ButtonIncrement;
