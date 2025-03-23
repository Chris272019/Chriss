import InteractiveBackground from "./components/InteractiveBackground"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CareerGoals from "./components/careergoals"
import CallToAction from "./components/calltoaction"
import PersonalTouch from "./components/personaltouch"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <InteractiveBackground />
      <div className="content-wrapper">
        <Header />
        <main>
          <Hero />
          <div className="container">
            <About />
            <Skills />
            <Projects />
            <CareerGoals />
            <PersonalTouch />
            <CallToAction />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

