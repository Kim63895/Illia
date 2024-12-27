import { createContext } from "react";

export const themes = {
  white: {
    color: "#fff",
    background: "#4f3434",
  },
  black: {
    color: "#e0e0e0",
    background: "#121212",
  },
};
export const ThemeContext = createContext();