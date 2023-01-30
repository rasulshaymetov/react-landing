import React from "react";
// import logo from "logo.svg";
import "./App.css";
import Header from "./components/Header";
import "./App.scss";
import SubHeading from "./components/SubHeading";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import fashion from './images/fashion.png'
import reebok from './images/reebok.png'
import camera from './images/camera.png'

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <SubHeading />
        <About />
        <Skills />
        <h1 className="portfolio__heading">Portfolio</h1>
        <Portfolio image={fashion} title={'Online fashion store - Homepage'} />
        <Portfolio image={reebok} title={'Reebok Store - Concept'} />
        <Portfolio image={camera} title={'Braun Landing Page - Concept'} />
      </div>
    </div>
  );
}

export default App;
