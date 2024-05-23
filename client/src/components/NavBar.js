import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex flex-column justify-content-md-between min-vh-md-100 sticky-top">
      <div className="container">
        <div className="pt-5 py-md-0 py-md-5">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-brand display-1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Jack Gusler
          </Link>
          <h3>Software Engineer</h3>
          <p
            style={{
              width: "65%",
            }}
          >
            A recent graduate seeking a software development position where I
            can continue to grow as a developer and contribute to a team.
          </p>
        </div>
        <div className="content d-none d-md-block">
          <div style={{ width: "100px", textAlign: "left" }}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-0 py-md-5 d-flex justify-content-between align-items-center">
        <div>
          <a
            href="https://github.com/jackgusler"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" style={{ color: "black" }}></i>
          </a>
          <a
            href="https://linkedin.com/in/jack-gusler"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" style={{ color: "black" }}></i>
          </a>
          <a href="mailto:jackgusler16@gmail.com" className="me-3">
            <i className="fas fa-envelope fa-2x" style={{ color: "black" }}></i>
          </a>
        </div>
        {/* <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            checked={theme === "dark"}
            onChange={toggleTheme}
            role="switch"
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            {theme === "dark" ? "Light" : "Dark"}
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
