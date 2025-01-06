import { useSelector } from "react-redux";
import selectors from "../../redux/slice/selectors";

const Footer = () => {
  const value = useSelector(selectors.counter.value);
  return <footer>({value})</footer>;
};

export default Footer;
