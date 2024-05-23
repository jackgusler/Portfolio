import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const iconColor = theme === "dark" ? "#f8f9fa" : "#212529";

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
            className={`nav-brand-${theme} display-1`}
            style={{ textDecoration: "none" }}
          >
            Jack Gusler
          </Link>
          <h3 className={theme}>Software Engineer</h3>
          <p
            className={theme}
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
              style={{ display: "block" }}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className={`nav-link-${theme} mb-1`}
            >
              About
            </Link>
            <Link
              style={{ display: "block" }}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className={`nav-link-${theme} mb-1`}
            >
              Skills
            </Link>
            <Link
              style={{ display: "block" }}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className={`nav-link-${theme} mb-1`}
            >
              Projects
            </Link>
            <Link
              style={{ display: "block" }}
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className={`nav-link-${theme} mb-1`}
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
            <i
              className={`fab fa-github fa-2x`}
              style={{ color: iconColor }}
            ></i>
          </a>
          <a
            href="https://linkedin.com/in/jack-gusler"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-linkedin fa-2x`}
              style={{ color: iconColor }}
            ></i>
          </a>
          <a href="mailto:jackgusler16@gmail.com" className="me-3">
            <i
              className={`fas fa-envelope fa-2x`}
              style={{ color: iconColor }}
            ></i>
          </a>
        </div>
        <div className="form-check form-switch d-none d-md-block">
          <label className={`form-check-label ${theme}`} htmlFor="themeSwitch">
            <i
              className="fas fa-sun"
              style={{
                position: "relative",
                left: "-40px",
              }}
            ></i>
            <i
              className="fas fa-moon"
              style={{
                right: "18px",
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
            style={{
              position: "relative",
              right: "-20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
