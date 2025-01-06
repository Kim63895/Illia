import React, { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

const About = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
        className="contacts"
        style={{ background: theme.background, color: theme.color }}
    >
      <p>Hello everyone glad to see you on my page here you can find some information about me</p>
    </div>

  );
};

export default About;
