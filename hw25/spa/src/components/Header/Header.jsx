import ChangeNightMode from "../ButtonNightMode/ButtonNightMode";
import Link from "../Link/Link";

const Header = () => (
  <header className="header">
    <h1>Illia</h1>
    <ul className="header_logo">
      <li>
        <Link href="/"> Main </Link>
      </li>
      <li>
        <Link href="/about-me"> About me </Link>
      </li>
      <li>
        <Link href="/contacts"> Contacts </Link>
      </li>
    </ul>
    <ChangeNightMode />
  </header>
);

export default Header;
