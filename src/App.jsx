import React from "react";
import InteractiveBackground from "./components/InteractiveBackground"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Carousel from "./components/carousel"
import Contests from "./components/Contests"
import CareerGoals from "./components/careergoals"
import CallToAction from "./components/calltoaction"
import Personaltouch from "./components/personaltouch"
import "./App.css"

function App() {
  return (
    <div className="App">
      <InteractiveBackground />
      <div className="content-wrapper">
        <Header />
        <Carousel />
        <div className="card-container">
          <About />
          <Skills />
          <Contests />
          <CareerGoals />
          <CallToAction />
          <Personaltouch />
        </div>
      </div>
    </div>
  )
}

export default App
