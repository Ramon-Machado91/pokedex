import React, { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#eeeeee",
    cardBackground: "#f6eb1a",
    text: "#000000",
  },
  dark: {
    background: "#000000",
    cardBackground: "#333333",
    text: "#ffffff",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
