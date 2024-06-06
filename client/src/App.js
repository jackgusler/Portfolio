import React, { useContext, useEffect } from "react";
import ReactGA from 'react-ga4';
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


export const App = () => {
  const trackingId = "G-CZSCJ78HBF"
  ReactGA.initialize(trackingId);
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleScroll = () => {
      const switchContainer = document.getElementById("switch");
      if (window.pageYOffset <= 2.8 * 16) {
        // 2.8rem in pixels
        switchContainer.style.top = `calc(4rem - ${
          window.pageYOffset / 16
        }rem)`;
      } else {
        switchContainer.style.top = "1.2rem";
      }
    };

    // Call handleScroll once when the page is loaded
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`app ${theme}`} style={{ position: "relative", zIndex: 1 }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="sticky-top-container">
          <div
            id="switch"
            className="form-check form-switch d-block d-md-none sticky-top-switch"
          >
            <label
              className={`form-check-label ${theme}`}
              htmlFor="themeSwitch"
            >
              <i
                className="fas fa-sun"
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></i>
              <i
                className="fas fa-moon"
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></i>
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark"}
              onChange={toggleTheme}
              role="switch"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 position-relative">
            <Navbar />
          </div>
          <div className="col-12 col-md-6">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
