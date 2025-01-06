import { useSelector } from "react-redux";
import selectors from "../../redux/slice/selectors";

const Header = () => {
  const value = useSelector(selectors.counter.value);
  return <header>Value: {value}</header>;
};

export default Header;
