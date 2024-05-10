import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PortfolioBackground from './processing/PortfolioBackground';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
// In your App component
return (
    <div className="App" style={{ position: 'relative' }}>
      <PortfolioBackground style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      <Navbar />
      <div className="container py-5">
        <Home />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Contact />
      </div>
    </div>
);
}

export default App;