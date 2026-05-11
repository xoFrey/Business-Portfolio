import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className='main'>
      <Navigation />
      <div className='divider-nav'></div>
      <Hero />
      <About />
      <div className='divider'></div>
      <Skills />
      <div className='divider'></div>
      <Projects />
    </main>
  );
}

export default App;
