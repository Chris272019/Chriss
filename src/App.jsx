import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Carousel from "./components/carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className="card-container">
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
