import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";

const Footer = () => {
  const items = useSelector(selectors.items); 

  return (
    <footer>
      <p>({items.length})</p> 
    </footer>
  );
};

export default Footer;
