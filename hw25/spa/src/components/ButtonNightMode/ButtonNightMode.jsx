import { useContext } from "react";
import { ThemeContext, themes } from "../Context/themeContext";

const ChangeNightMode = () => {
    const [theme, setTheme] = useContext(ThemeContext)
  const handleClick = () => {
    setTheme(theme === themes.white ? themes.black : themes.white)
  };

  return <button onClick={handleClick}>Night-Mode</button>;
};
export default ChangeNightMode;
