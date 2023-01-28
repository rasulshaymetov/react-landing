import React from "react";
// import logo from "logo.svg";
import "./App.css";
import Header from "./components/Header";
import "./App.scss";
import SubHeading from "./components/SubHeading";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <SubHeading />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
