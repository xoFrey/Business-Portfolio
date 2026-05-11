import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className='main'>
      <Navigation />
      <div className='divider-nav'></div>
      <Hero />
      <About />
      <div className='divider'></div>
    </main>
  );
}

export default App;
