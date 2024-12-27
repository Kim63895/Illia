import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

const Link = (props) => {
    const [theme] = useContext(ThemeContext);

    const {children, href} = props;
     return (
    <a href={href} style={{color: theme.color}}>{children}</a>
 )
}
export default Link;
