import React from "react";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import PortfolioBackground from "./processing/PortfolioBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app" style={{ position: "relative", zIndex: 1 }}>
      {/* <PortfolioBackground /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
          <div className="col">
            <About />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;