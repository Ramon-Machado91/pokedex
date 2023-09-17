import React, { useContext } from "react";
import { ThemeProvider, themes } from "./Contexts/Theme-context";
import Router from "./router";
import { ThemeContext } from "./Contexts/Theme-context";

function App() {
  const { theme } = useContext(ThemeContext);

  const bodyClass = theme === themes.light ? "theme-light" : "theme-dark";

  return (
    <div className={bodyClass}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
