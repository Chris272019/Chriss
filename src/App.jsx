import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
