import React, { useState } from "react";

const ThemeContext = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
    </div>
  );
};

export default ThemeContext;
