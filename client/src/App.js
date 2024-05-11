import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PortfolioBackground from "./processing/PortfolioBackground";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ position: "relative", zIndex: 1, display: "flex" }}>
      <PortfolioBackground />
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Navbar />
        </div>
        <div style={{ flex: 1 }}>
          <div className="container">
            <Home />
            <hr />
            <About />
            <hr />
            <Projects />
            <hr />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;