import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

import Carousel from "./components/carousel";
import Contests from "./components/Contests";
import CareerGoals from "./components/CareerGoals"; // Import new component
import CallToAction from "./components/calltoaction";
import Personaltouch from "./components/personaltouch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className="card-container">
        <About />
        <Skills />
        <Contests />
        <CareerGoals /> {/* Add Career Goals component */}
        <CallToAction />
        <Personaltouch />
      </div>

    </div>
  );
}

export default App;
