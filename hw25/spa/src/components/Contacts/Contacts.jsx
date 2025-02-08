import React, { useContext } from "react";
import Link from "../Link/Link";
import { ThemeContext } from "../Context/themeContext";

const Contacts = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <footer
      className="contacts"
      style={{ background: theme.background, color: theme.color }}
    >
      <ul>
        <li>
          Phone Number:<Link href="tel:+48739694876"> +48739694876 </Link>
        </li>
        <li>
          Email:
          <Link href="mailto: kim977563@gmail.com">kim977563@gmail.com </Link>
        </li>
        <li>
          Github link:
          <Link href="https://github.com/Kim63895"> github.com/Kim63895</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Contacts;
