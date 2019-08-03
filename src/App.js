import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div>
      <header className="header">Scoops Ahoy!</header>
      <Slider />
      <Chatbot />
    </div>
  );
}

export default App;
