import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  const [currentform, setCurrentform] = useState("login");
  const toggleForm = (Name)=>{
    setCurrentform (Name)
  }
  return (
    <div className="App">
      {currentform === "login" ? <Login  onformSwitch={ toggleForm} /> : <Register onformSwitch={ toggleForm} />}
    </div>
  );
}

export default App;
