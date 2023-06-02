import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ThemeContext from "./components/ThemeContext";

function App() {
  return (
    <>
      <div id="container">
        <LoginForm />
        <ThemeContext />;
      </div>
    </>
  );
}

export default App;
