import { useDispatch } from "react-redux";
import { counter } from "../../redux/slices/counterSlice";

const ButtonIncrement = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(counter.actions.increment());
  };

  return <button onClick={onClick}>+</button>;
};

export default ButtonIncrement;
